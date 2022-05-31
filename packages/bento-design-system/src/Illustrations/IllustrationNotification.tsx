import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationNotification(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path
          d="M41.25 58.75a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5 7.5 7.5 0 0 0-7.5-7.5Z"
          fill="#F5C872"
        />
        <path
          d="M41.25 75c-4.825 0-8.75-3.926-8.75-8.75s3.925-8.75 8.75-8.75c4.824 0 8.75 3.926 8.75 8.75S46.074 75 41.25 75Zm0-15A6.257 6.257 0 0 0 35 66.25a6.257 6.257 0 0 0 6.25 6.25 6.257 6.257 0 0 0 6.25-6.25A6.257 6.257 0 0 0 41.25 60Z"
          fill="#8D6C9F"
        />
        <path
          d="M72.337 65.112a1.25 1.25 0 0 1-1.137.675H11.25a1.25 1.25 0 0 1-1.025-2.037l5.537-8.3 1.475-2.575a14.23 14.23 0 0 0 1.25-4.15l2.763-22.35c1.056-8.367 8.166-14.648 16.6-14.662h6.8c8.434.014 15.544 6.295 16.6 14.662l2.812 22.375a14.252 14.252 0 0 0 2.275 6.1l5.938 8.9c.289.401.312.936.062 1.362Z"
          fill="#F9E3AE"
        />
        <path
          d="M57.287 17.5a16.727 16.727 0 0 0-12.637-5.787h-6.8A16.727 16.727 0 0 0 25.212 17.5h32.075Z"
          fill="#FAEFDE"
        />
        <path
          d="M70.2 66.25H12.3a2.5 2.5 0 0 1-2.05-3.938l6-8.562h50l6 8.563a2.5 2.5 0 0 1-2.05 3.937Z"
          fill="#F6D397"
        />
        <path
          d="m73.45 61.675-5.775-8.662a11.245 11.245 0 0 1-1.8-4.85L63.15 26.425a18.75 18.75 0 0 0-14.662-15.988l-1.675-3.362A3.751 3.751 0 0 0 43.45 5h-4.4a3.751 3.751 0 0 0-3.35 2.075l-1.687 3.362A18.75 18.75 0 0 0 19.35 26.425l-2.725 21.738a11.246 11.246 0 0 1-1.8 4.85L9.05 61.675a3.75 3.75 0 0 0 3.125 5.825h58.15a3.75 3.75 0 0 0 3.125-5.825ZM37.925 8.188c.214-.426.65-.692 1.125-.688h4.413a1.25 1.25 0 0 1 1.112.688L45.5 10H37l.925-1.813Zm33.5 56.15a1.25 1.25 0 0 1-1.1.662h-58.15a1.25 1.25 0 0 1-1.037-1.938L16.5 55l1.438-2.5a13.763 13.763 0 0 0 1.175-4.025l2.712-21.738C22.84 18.605 29.754 12.5 37.95 12.5h6.6c8.196 0 15.11 6.104 16.125 14.238l2.713 21.737a13.823 13.823 0 0 0 2.2 5.925l5.775 8.663c.252.38.276.87.062 1.275Z"
          fill="#8D6C9F"
        />
        <path
          d="M22.5 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM16.25 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM28.75 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM35 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM41.25 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM47.5 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM53.75 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM60 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM66.25 57.5c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25ZM51.25 55h-35a1.25 1.25 0 1 1 0-2.5h35a1.249 1.249 0 1 1 0 2.5ZM61.25 55h-5a1.249 1.249 0 1 1 0-2.5h5a1.249 1.249 0 1 1 0 2.5ZM54.507 28.79a1.25 1.25 0 0 1-1.238-1.082 12.427 12.427 0 0 0-.837-3.172 1.249 1.249 0 1 1 2.302-.971c.487 1.152.828 2.434 1.014 3.809a1.252 1.252 0 0 1-1.241 1.416ZM50.322 21.045c-.265 0-.532-.084-.757-.258-2.69-2.058-5.89-2.13-5.921-2.13a1.25 1.25 0 0 1-1.233-1.266c.008-.688.538-1.248 1.259-1.235.164.002 4.042.064 7.415 2.646a1.25 1.25 0 0 1-.763 2.243Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M37.622 5c-1.426 0-2.71.796-3.355 2.07l-1.68 3.365c-7.64 1.645-13.661 7.963-14.667 15.99l-2.715 21.74a11.269 11.269 0 0 1-1.802 4.843L7.632 61.67a3.741 3.741 0 0 0-.186 3.852 3.74 3.74 0 0 0 3.3 1.978h20.43c.611 4.233 4.253 7.5 8.653 7.5s8.042-3.267 8.652-7.5h20.43a3.734 3.734 0 0 0 3.3-1.978 3.752 3.752 0 0 0-.18-3.852l-5.776-8.662a11.269 11.269 0 0 1-1.802-4.844l-2.715-21.738c-1.006-8.028-7.026-14.346-14.668-15.991L45.39 7.07A3.74 3.74 0 0 0 42.037 5h-4.414Zm0 2.5h4.414c.474 0 .903.264 1.113.693l.928 1.85c-.317-.014-.625-.043-.947-.043h-6.602c-.317 0-.63.03-.947.044l.928-1.85c.21-.43.64-.694 1.113-.694Zm-1.094 5h6.602c8.178 0 15.107 6.118 16.123 14.233l2.72 21.744a13.792 13.792 0 0 0 2.202 5.918l5.771 8.657a1.23 1.23 0 0 1 .064 1.289c-.108.195-.425.659-1.099.659H10.747c-.674 0-.991-.459-1.099-.66-.107-.2-.312-.722.064-1.283L15.082 55H50.04c.688 0 1.25-.562 1.25-1.25s-.562-1.25-1.25-1.25H16.513a13.801 13.801 0 0 0 1.172-4.023L20.4 26.733C21.416 18.618 28.35 12.5 36.528 12.5Zm5.645 3.75c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25c2.25 0 4.448.786 6.176 2.222.235.19.518.288.796.288a1.254 1.254 0 0 0 .8-2.217 12.223 12.223 0 0 0-7.772-2.793Zm9.946 6.445c-.161.005-.322.04-.478.113a1.242 1.242 0 0 0-.625 1.65c.444.991.722 2.056.815 3.154.058.65.6 1.138 1.245 1.138.034 0 .073 0 .107-.005a1.25 1.25 0 0 0 1.138-1.357 12.14 12.14 0 0 0-1.03-3.955 1.256 1.256 0 0 0-1.172-.738ZM54.726 52.5c-.688 0-1.25.562-1.25 1.25s.562 1.25 1.25 1.25h5.313c.688 0 1.25-.562 1.25-1.25s-.562-1.25-1.25-1.25h-5.313Zm-39.897 5c-.689 0-1.25.562-1.25 1.25v2.5c0 .688.561 1.25 1.25 1.25.688 0 1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm6.25 0c-.689 0-1.25.562-1.25 1.25v2.5c0 .688.561 1.25 1.25 1.25.688 0 1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm6.25 0c-.689 0-1.25.562-1.25 1.25v2.5c0 .688.561 1.25 1.25 1.25.688 0 1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm6.25 0c-.688 0-1.25.562-1.25 1.25v2.5c0 .688.562 1.25 1.25 1.25s1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm6.25 0c-.688 0-1.25.562-1.25 1.25v2.5c0 .688.562 1.25 1.25 1.25s1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm6.25 0c-.688 0-1.25.562-1.25 1.25v2.5c0 .688.562 1.25 1.25 1.25s1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm6.25 0c-.688 0-1.25.562-1.25 1.25v2.5c0 .688.562 1.25 1.25 1.25s1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm6.25 0c-.688 0-1.25.562-1.25 1.25v2.5c0 .688.562 1.25 1.25 1.25s1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm6.25 0c-.688 0-1.25.562-1.25 1.25v2.5c0 .688.562 1.25 1.25 1.25s1.25-.562 1.25-1.25v-2.5c0-.688-.562-1.25-1.25-1.25Zm-31.123 10h12.246c-.581 2.847-3.105 5-6.123 5-3.018 0-5.542-2.153-6.123-5Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}