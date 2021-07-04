import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { Box } from '../components/primitives';
import { Layout } from '../components/Layout';

export default function NapoleonsTheorem() {
  const triangleRef = useRef(null);
  const centroidTriangleRef = useRef(null);
  const handle1Ref = useRef(null);
  const handle2Ref = useRef(null);
  const handle3Ref = useRef(null);

  useEffect(() => {
    if (
      triangleRef.current &&
      centroidTriangleRef.current &&
      handle1Ref.current &&
      handle2Ref.current &&
      handle3Ref.current &&
      typeof window !== 'undefined'
    ) {
      return play(
        triangleRef.current,
        centroidTriangleRef.current,
        handle1Ref.current,
        handle2Ref.current,
        handle3Ref.current
      );
    }
  }, [triangleRef, centroidTriangleRef, handle1Ref, handle2Ref, handle3Ref]);

  return (
    <Layout
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'stretch',
      }}
    >
      <Head>
        <script
          async
          src="https://unpkg.com/@reactivex/rxjs@5.1.0/dist/global/Rx.min.js"
        />
        <script async src="https://unpkg.com/rxcss@latest/dist/rxcss.min.js" />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"
        />
        <title>Napoleon's Theorem | Varun Vachhar</title>
      </Head>
      <>
        <Box css={{ flex: '1 1 auto' }} />
        <Box
          css={{
            background: 'rgba(255,255,255,0.1)',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            pointerEvents: 'none',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid"
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <g
              fill="none"
              strokeWidth="2"
              strokeLinejoin="round"
              style={{ pointerEvents: 'initial' }}
            >
              <path ref={triangleRef} stroke="#333" d="" />
              <path ref={centroidTriangleRef} stroke="#01FF70" d="" />
              <circle
                cx="100"
                cy="200"
                r="10"
                ref={handle1Ref}
                fill="#A463F2"
                opacity="0.55"
              />
              <circle
                cx="150"
                cy="100"
                r="10"
                ref={handle2Ref}
                fill="#A463F2"
                opacity="0.55"
              />
              <circle
                cx="300"
                cy="200"
                r="10"
                ref={handle3Ref}
                fill="#A463F2"
                opacity="0.55"
              />
            </g>
          </svg>
        </Box>
      </>
    </Layout>
  );
}

function play(triangle, centroidTriangle, handle1, handle2, handle3) {
  const animationFrame$ = Rx.Observable.interval(
    0,
    Rx.Scheduler.animationFrame
  );

  // Drag Handler
  const drag = (domNode, pan$) =>
    pan$
      .filter((e) => e.type === 'panstart')
      .switchMap(() => {
        const start = {
          x: +domNode.getAttribute('cx'),
          y: +domNode.getAttribute('cy'),
        };
        const w = document.body.clientWidth;
        const h = document.body.clientHeight;
        domNode.setAttribute('r', 15);

        const svgW = w > h ? (400 * w) / h : 400;
        const svgH = w > h ? 400 : (400 * h) / w;

        const move$ = pan$
          .filter((e) => e.type === 'panmove')
          .map((pm) => {
            return {
              x: start.x + linInterp(pm.deltaX, 0, w, 0, svgW),
              y: start.y + linInterp(pm.deltaY, 0, h, 0, svgH),
            };
          })
          .takeUntil(pan$.filter((e) => e.type === 'panend'));

        move$.subscribe(null, null, () => domNode.setAttribute('r', 10));

        return move$;
      });

  const handleDrag = (domNode) => {
    const hammerPan = new Hammer(domNode, {
      direction: Hammer.DIRECTION_ALL,
    });

    hammerPan.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    const pan$ = Rx.Observable.fromEventPattern((h) =>
      hammerPan.on('panstart panup pandown panmove panend', h)
    );

    const drag$ = drag(domNode, pan$);

    return animationFrame$
      .withLatestFrom(drag$, (_, e) => e)
      .scan(RxCSS.lerp(0.1))
      .map((p) => [p.x, p.y]);
  };

  const points$ = Rx.Observable.combineLatest(
    handleDrag(handle1).startWith([100, 200]),
    handleDrag(handle2).startWith([150, 100]),
    handleDrag(handle3).startWith([300, 200])
  );

  const triangle$ = points$
    .distinctUntilChanged((p, n) => Math.abs(addAll(p) - addAll(n)) < 0.1)
    .map((points) => ({
      points,
      circumCenter: circumCenter(...points),
    }));

  // State: Main Triangle, Equilateral triangles and Centroid Triangle
  const state$ = triangle$
    .map(({ points: [u, v, w], circumCenter }) => ({
      triangle: [u, v, w],
      a: eqTriangle(u, v, circumCenter, w),
      b: eqTriangle(v, w, circumCenter, u),
      c: eqTriangle(w, u, circumCenter, v),
      circumCenter,
    }))
    .map(({ triangle, a, b, c, circumCenter }) => ({
      triangle,
      a,
      b,
      c,
      centroidTriangle: [centroid(a), centroid(b), centroid(c)],
      cc: circumCenter,
    }));

  // Convert state to SVG geometry and render
  const svgGeometry$ = state$.map(
    ({ triangle, a, b, c, centroidTriangle, cc }) => {
      return {
        triangleD: [
          'M',
          triangle.join('L'),
          'L',
          a.join('L'),
          'L',
          b.join('L'),
          'L',
          c.join('L'),
        ],
        cc,
        debugD: [
          'M',
          ...triangle[0],
          'L',
          ...cc,
          'L',
          ...triangle[1],
          'M',
          ...cc,
          'L',
          ...triangle[2],
          'M',
          ...a[1],
          'L',
          ...cc,
          'L',
          ...b[1],
          'M',
          ...cc,
          'L',
          ...c[1],
        ].join(' '),
        centroidTriangleD: ['M', centroidTriangle.join('L'), 'Z'],
        handles: [triangle[0], triangle[1], triangle[2]],
      };
    }
  );

  const subscription = svgGeometry$.subscribe(
    ({ triangleD, centroidTriangleD, handles: [h1, h2, h3] }) => {
      triangle.setAttribute('d', triangleD.join(''));
      centroidTriangle.setAttribute('d', centroidTriangleD.join(''));
      handle1.setAttribute('cx', h1[0]);
      handle1.setAttribute('cy', h1[1]);
      handle2.setAttribute('cx', h2[0]);
      handle2.setAttribute('cy', h2[1]);
      handle3.setAttribute('cx', h3[0]);
      handle3.setAttribute('cy', h3[1]);
    }
  );

  return () => {
    subscription.unsubscribe();
  };
}

/**
 * Geometry
 */
function eqTriangle(u, v, cc) {
  return [u, apex(u, v, cc), v];
}

function apex([ux, uy], [vx, vy], [ccx, ccy]) {
  const [mpx, mpy] = [(vx + ux) / 2, (vy + uy) / 2];
  const dir = sign([ccx, ccy], [ux, uy], [vx, vy]) > 0 ? 1 : -1;
  const ccMp = [mpx - ccx, mpy - ccy].map((x) => x * dir);

  const h = triangleHeight([ux, uy], [vx, vy]);
  const m = magnitude(ccMp);

  const [nx, ny] = ccMp.map((s) => (s * (h + dir * m)) / m);

  return [nx + ccx, ny + ccy];
}

function circumCenter([ax, ay], [bx, by], [cx, cy]) {
  const d = (ax - cx) * (by - cy) - (bx - cx) * (ay - cy);
  const x =
    ((((ax - cx) * (ax + cx) + (ay - cy) * (ay + cy)) / 2) * (by - cy) -
      (((bx - cx) * (bx + cx) + (by - cy) * (by + cy)) / 2) * (ay - cy)) /
    d;
  const y =
    ((((bx - cx) * (bx + cx) + (by - cy) * (by + cy)) / 2) * (ax - cx) -
      (((ax - cx) * (ax + cx) + (ay - cy) * (ay + cy)) / 2) * (bx - cx)) /
    d;

  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

function centroid([[ux, uy], [vx, vy], [wx, wy]]) {
  return [avg(ux, vx, wx), avg(uy, vy, wy)];
}

/**
 * Utils
 */
function magnitude([x, y]) {
  return (x ** 2 + y ** 2) ** 0.5;
}

function triangleHeight([ux, uy], [vx, vy]) {
  return (3 ** 0.5 * dist([ux, uy], [vx, vy])) / 2;
}

function dist([ux, uy], [vx, vy]) {
  return Math.sqrt((ux - vx) * (ux - vx) + (uy - vy) * (uy - vy));
}

function avg(t0, t1, t2) {
  return (t0 + t1 + t2) / 3;
}

function linInterp(x, x1, x2, y1, y2) {
  return (x - x1) * ((y2 - y1) / (x2 - x1)) + y1;
}

function add(a, b) {
  return a + b;
}

function addAll(list) {
  return list.map((x) => x.reduce(add, 0)).reduce(add, 0);
}

function sign([p1x, p1y], [p2x, p2y], [p3x, p3y]) {
  return (p1x - p3x) * (p2y - p3y) - (p2x - p3x) * (p1y - p3y);
}
