import { styled } from '../stitches.config';

const Video = styled('video', {
  width: '100%',
  height: 'auto',
});

const Image = styled('img', {
  width: '100%',
  height: 'auto',
});

export const Media = ({ image, video, ...props }) => (
  <>
    {video ? (
      <Video autoPlay loop muted playsInline display="block" mb="0" {...props}>
        <source src={video} type="video/mp4" />
      </Video>
    ) : (
      <Image src={image} display="block" {...props} />
    )}
  </>
);
