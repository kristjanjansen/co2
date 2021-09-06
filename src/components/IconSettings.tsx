import React, { SVGProps } from "react";

export function IconSettings(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={["stroke-current", props.className || ""].join(" ")}
    >
      <path
        d="M10.546 2.438C10.7295 2.6417 10.9538 2.80457 11.2043 2.91605C11.4547 3.02754 11.7258 3.08514 12 3.08514C12.2742 3.08514 12.5453 3.02754 12.7958 2.91605C13.0462 2.80457 13.2705 2.6417 13.454 2.438L14.4 1.4C14.6711 1.09995 15.0285 0.891146 15.423 0.802265C15.8175 0.713384 16.2299 0.748776 16.6035 0.903585C16.9771 1.05839 17.2936 1.32503 17.5096 1.6669C17.7257 2.00877 17.8306 2.40912 17.81 2.813L17.739 4.213C17.7253 4.48611 17.7689 4.75907 17.8671 5.01429C17.9653 5.26951 18.1158 5.50134 18.309 5.69484C18.5022 5.88834 18.7338 6.03922 18.9889 6.13777C19.244 6.23631 19.5169 6.28034 19.79 6.267L21.19 6.196C21.5936 6.17611 21.9935 6.28152 22.3349 6.49779C22.6763 6.71407 22.9424 7.03062 23.0968 7.40407C23.2512 7.77752 23.2864 8.18958 23.1974 8.58379C23.1085 8.97799 22.8998 9.33504 22.6 9.606L21.558 10.546C21.3546 10.7298 21.1919 10.9542 21.0806 11.2047C20.9693 11.4552 20.9118 11.7264 20.9118 12.0005C20.9118 12.2747 20.9693 12.5458 21.0806 12.7963C21.1919 13.0468 21.3546 13.2712 21.558 13.455L22.6 14.395C22.9001 14.6661 23.1089 15.0235 23.1978 15.418C23.2866 15.8125 23.2512 16.2249 23.0964 16.5985C22.9416 16.9721 22.675 17.2886 22.3331 17.5046C21.9912 17.7206 21.5909 17.8256 21.187 17.805L19.787 17.734C19.5133 17.7199 19.2397 17.7635 18.9839 17.8618C18.728 17.9601 18.4957 18.1111 18.3019 18.3049C18.1081 18.4987 17.9572 18.731 17.8588 18.9869C17.7605 19.2427 17.7169 19.5163 17.731 19.79L17.802 21.19C17.8199 21.5919 17.7137 21.9895 17.4977 22.3289C17.2818 22.6682 16.9666 22.9329 16.595 23.0869C16.2234 23.2409 15.8134 23.2768 15.4207 23.1897C15.028 23.1026 14.6716 22.8967 14.4 22.6L13.459 21.559C13.2753 21.3556 13.051 21.193 12.8006 21.0817C12.5501 20.9704 12.2791 20.9128 12.005 20.9128C11.7309 20.9128 11.4599 20.9704 11.2095 21.0817C10.959 21.193 10.7347 21.3556 10.551 21.559L9.60601 22.6C9.33482 22.8981 8.9783 23.1053 8.58506 23.1934C8.19181 23.2814 7.78097 23.2461 7.40855 23.0921C7.03613 22.9382 6.72026 22.6731 6.50398 22.3331C6.28771 21.993 6.18156 21.5946 6.20001 21.192L6.27201 19.792C6.28609 19.5183 6.24255 19.2447 6.14421 18.9889C6.04586 18.733 5.89491 18.5007 5.70111 18.3069C5.50731 18.1131 5.27498 17.9622 5.01916 17.8638C4.76334 17.7655 4.48972 17.7219 4.21601 17.736L2.81601 17.807C2.41229 17.8281 2.01195 17.7237 1.66995 17.5081C1.32794 17.2926 1.06104 16.9764 0.905893 16.6031C0.750741 16.2298 0.714943 15.8176 0.803414 15.4232C0.891885 15.0287 1.10029 14.6713 1.40001 14.4L2.44101 13.46C2.64446 13.2762 2.80709 13.0518 2.9184 12.8013C3.02971 12.5508 3.08723 12.2797 3.08723 12.0055C3.08723 11.7314 3.02971 11.4602 2.9184 11.2097C2.80709 10.9592 2.64446 10.7348 2.44101 10.551L1.40001 9.606C1.10126 9.33501 0.893494 8.97836 0.805112 8.58481C0.71673 8.19126 0.752046 7.78002 0.906233 7.4073C1.06042 7.03458 1.32595 6.71858 1.66653 6.50248C2.00711 6.28639 2.40612 6.18075 2.80901 6.2L4.20901 6.271C4.48324 6.28542 4.75743 6.242 5.01379 6.14354C5.27014 6.04509 5.50292 5.89382 5.697 5.69955C5.89108 5.50528 6.04213 5.27235 6.14033 5.0159C6.23853 4.75946 6.28169 4.48522 6.26701 4.211L6.20001 2.81C6.18112 2.40727 6.28694 2.00851 6.50305 1.66815C6.71916 1.32778 7.03503 1.06238 7.40755 0.908167C7.78007 0.753953 8.1911 0.718434 8.58455 0.806457C8.978 0.89448 9.33471 1.10176 9.60601 1.4L10.546 2.438Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 16.501C14.4853 16.501 16.5 14.4863 16.5 12.001C16.5 9.51573 14.4853 7.50101 12 7.50101C9.51472 7.50101 7.5 9.51573 7.5 12.001C7.5 14.4863 9.51472 16.501 12 16.501Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}
