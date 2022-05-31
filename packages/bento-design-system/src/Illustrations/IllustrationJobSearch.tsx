import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationJobSearch(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path d="m46.25 66.25-7.5 7.5L40 77.5h5l6.25-6.25-5-5Z" fill="#BECDE8" />
        <path
          d="M72.5 23.75h-65a3.75 3.75 0 0 0-3.75 3.75v33.75A3.75 3.75 0 0 0 7.5 65h65a3.75 3.75 0 0 0 3.75-3.75V27.5a3.75 3.75 0 0 0-3.75-3.75Z"
          fill="#CDA1A7"
        />
        <path
          d="M75 65H5c-.69 0-1.25-.56-1.25-1.25V62.5a5 5 0 0 1 5-5h62.5a5 5 0 0 1 5 5v1.25c0 .69-.56 1.25-1.25 1.25Z"
          fill="#C4939C"
        />
        <path
          d="M76.25 10H3.75a2.5 2.5 0 0 0-2.5 2.5v12.254a5 5 0 0 0 3.899 4.877L40 37.5l34.851-7.87a5 5 0 0 0 3.899-4.876V12.5a2.5 2.5 0 0 0-2.5-2.5Z"
          fill="#CDA1A7"
        />
        <path
          d="M3.75 10h72.5a2.5 2.5 0 0 1 2.5 2.5A3.75 3.75 0 0 1 75 16.25H5a3.75 3.75 0 0 1-3.75-3.75 2.5 2.5 0 0 1 2.5-2.5Z"
          fill="#DBB2BA"
        />
        <path
          d="M42.5 41.25h-5c-.69 0-1.25-.56-1.25-1.25v-7.5c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25V40c0 .69-.56 1.25-1.25 1.25Z"
          fill="#F9E3AE"
        />
        <path d="M61.25 38.75a17.5 17.5 0 1 0 0 35 17.5 17.5 0 0 0 0-35Z" fill="#FFEB97" />
        <path d="M61.25 43.75a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Z" fill="#ABDEF9" />
        <path d="M61.25 48.75a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z" fill="#C6EDFF" />
        <path
          d="M57.5 48.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm8.125 10a1.875 1.875 0 1 0 0 3.751 1.875 1.875 0 0 0 0-3.751Z"
          fill="#F2F2F2"
        />
        <path
          d="M80 24.75V12.5a3.761 3.761 0 0 0-3.75-3.75H54.419l-3.886-5.83a3.742 3.742 0 0 0-3.12-1.67H32.588a3.742 3.742 0 0 0-3.12 1.67L25.58 8.75H3.75A3.761 3.761 0 0 0 0 12.5v12.25c0 2.038.95 3.863 2.5 5V62.5a3.761 3.761 0 0 0 3.75 3.75h38.024L38.9 71.612a4.806 4.806 0 0 0 0 6.776 4.822 4.822 0 0 0 3.388 1.4c1.225 0 2.45-.475 3.387-1.4L51.4 72.65c.1-.1.188-.188.263-.3A18.526 18.526 0 0 0 61.25 75C71.588 75 80 66.588 80 56.25c0-3.4-.912-6.587-2.5-9.337V29.75c1.55-1.137 2.5-2.962 2.5-5ZM31.547 4.306a1.247 1.247 0 0 1 1.04-.556h14.825c.42 0 .808.208 1.04.556l2.962 4.444H28.586l2.962-4.444ZM43.9 76.612c-.887.9-2.337.9-3.225 0-.9-.887-.9-2.337 0-3.224l5.713-5.726a18.894 18.894 0 0 0 3.212 3.263l-5.7 5.688Zm30.163-10.387A16.195 16.195 0 0 1 61.25 72.5c-3.225 0-6.225-.938-8.75-2.563-1.55-1-2.925-2.237-4.05-3.687-.363-.45-.688-.925-.988-1.425-.225-.35-.437-.713-.625-1.075a15.889 15.889 0 0 1-1.637-5c-.138-.813-.2-1.65-.2-2.5C45 47.288 52.288 40 61.25 40c5.787 0 10.875 3.038 13.75 7.6a16.129 16.129 0 0 1 2.5 8.65 16.17 16.17 0 0 1-3.438 9.975ZM61.25 37.5c-10.337 0-18.75 8.413-18.75 18.75H8.75c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25h33.925a18.09 18.09 0 0 0 1.4 5H6.25c-.688 0-1.25-.563-1.25-1.25V30.875l30 6.788V40c0 1.375 1.125 2.5 2.5 2.5h5c1.375 0 2.5-1.125 2.5-2.5v-2.337l30-6.788v12.65c-3.425-3.7-8.325-6.025-13.75-6.025Zm-23.75-5h5V40h-5v-7.5ZM75 28.288c-.138.05-.275.087-.425.125L45 35.087V32.5c0-1.375-1.125-2.5-2.5-2.5h-5a2.507 2.507 0 0 0-2.5 2.5v2.587L5.425 28.412A4.217 4.217 0 0 1 5 28.289a3.723 3.723 0 0 1-2.5-3.538v-6c.69 0 1.25-.559 1.25-1.25V15c0-.691-.56-1.25-1.25-1.25V12.5c0-.688.563-1.25 1.25-1.25h72.5c.688 0 1.25.563 1.25 1.25v1.25c-.69 0-1.25.559-1.25 1.25v2.5c0 .691.56 1.25 1.25 1.25v6c0 1.613-1 3.012-2.5 3.538Z"
          fill="#8D6C9F"
        />
        <path
          d="M8.75 13.75c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0V15c0-.691-.56-1.25-1.25-1.25ZM61.142 42.5C53.62 42.5 47.5 48.62 47.5 56.142c0 7.523 6.12 13.643 13.642 13.643 7.523 0 13.643-6.12 13.643-13.642 0-7.523-6.12-13.643-13.642-13.643Zm0 24.785C55 67.285 50 62.286 50 56.143 50 49.998 54.999 45 61.142 45c6.144 0 11.143 4.999 11.143 11.142 0 6.144-4.999 11.143-11.142 11.143Z"
          fill="#8D6C9F"
        />
        <path
          d="M61.143 47.282a1.25 1.25 0 1 0 0 2.5 6.355 6.355 0 0 1 5.852 3.868 1.25 1.25 0 0 0 2.299-.981 8.85 8.85 0 0 0-8.151-5.386Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M32.588 1a3.742 3.742 0 0 0-3.12 1.67L25.58 8.5H3.75A3.761 3.761 0 0 0 0 12.25v12.251c0 2.037.95 3.862 2.5 5V62.25A3.761 3.761 0 0 0 6.25 66h38.025l-5.376 5.361a4.809 4.809 0 0 0 0 6.778 4.823 4.823 0 0 0 3.389 1.399 4.818 4.818 0 0 0 3.386-1.4l5.725-5.74c.1-.1.189-.184.264-.297a18.525 18.525 0 0 0 9.587 2.649C71.588 74.75 80 66.338 80 56c0-3.4-.912-6.588-2.5-9.338V29.5c1.55-1.138 2.5-2.963 2.5-5V12.25a3.761 3.761 0 0 0-3.75-3.75H54.419l-3.887-5.83A3.742 3.742 0 0 0 47.412 1H32.588Zm0 2.5h14.824c.419 0 .808.208 1.04.557L51.414 8.5H28.586l2.962-4.443a1.247 1.247 0 0 1 1.04-.557ZM3.75 11h72.5c.688 0 1.25.563 1.25 1.25v1.25c-.69 0-1.25.559-1.25 1.25v2.5c0 .691.56 1.25 1.25 1.25v6.001c0 1.612-1 3.013-2.5 3.538-.138.05-.275.087-.425.124L45 34.838V32.25c0-1.375-1.125-2.5-2.5-2.5h-5a2.507 2.507 0 0 0-2.5 2.5v2.588L5.425 28.163A4.213 4.213 0 0 1 5 28.04 3.724 3.724 0 0 1 2.5 24.5V18.5c.69 0 1.25-.559 1.25-1.25v-2.5c0-.691-.56-1.25-1.25-1.25v-1.25c0-.688.563-1.25 1.25-1.25Zm5 2.5c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25Zm6.25 0c-.69 0-1.25.559-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.691-.56-1.25-1.25-1.25ZM5 30.624l30 6.79v2.336c0 1.375 1.125 2.5 2.5 2.5h5c1.375 0 2.5-1.125 2.5-2.5v-2.336l30-6.79v12.651c-3.425-3.7-8.325-6.025-13.75-6.025-10.337 0-18.75 8.413-18.75 18.75H8.75c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25h33.926a18.089 18.089 0 0 0 1.399 5H6.25c-.688 0-1.25-.563-1.25-1.25V30.624Zm32.5 1.626h5v7.5h-5v-7.5Zm23.75 7.5c5.787 0 10.875 3.038 13.75 7.6A16.129 16.129 0 0 1 77.5 56c0 3.75-1.287 7.226-3.438 9.976A16.195 16.195 0 0 1 61.25 72.25c-3.225 0-6.225-.939-8.75-2.564-1.55-1-2.925-2.236-4.05-3.686-.363-.45-.687-.926-.987-1.426a13.31 13.31 0 0 1-.625-1.074 15.89 15.89 0 0 1-1.638-5c-.137-.813-.2-1.65-.2-2.5 0-8.962 7.288-16.25 16.25-16.25Zm-.107 2.5c-7.523 0-13.643 6.12-13.643 13.643 0 7.522 6.12 13.642 13.643 13.642 7.522 0 13.642-6.12 13.642-13.642 0-7.523-6.12-13.643-13.642-13.643Zm0 2.5c6.143 0 11.142 4.999 11.142 11.143 0 6.143-4.999 11.142-11.142 11.142C54.999 67.035 50 62.036 50 55.893c0-6.144 4.999-11.143 11.143-11.143Zm0 2.283a1.25 1.25 0 1 0 0 2.5 6.354 6.354 0 0 1 5.852 3.867 1.25 1.25 0 1 0 2.3-.981 8.85 8.85 0 0 0-8.152-5.386Zm-14.756 20.38a18.892 18.892 0 0 0 3.213 3.262l-5.701 5.686c-.888.9-2.338.9-3.225 0a2.26 2.26 0 0 1 0-3.222l5.713-5.725Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}