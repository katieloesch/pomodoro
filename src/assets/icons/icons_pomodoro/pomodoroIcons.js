const pomodoroIcons = {
  upArrow: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
          <path
            fill="currentColor"
            d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"
          ></path>
        </g>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/mingcute/up-fill/",
  },
  downArrow: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
          <path
            fill="currentColor"
            d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
          ></path>
        </g>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/mingcute/down-fill/",
  },
  start: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
        ></path>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/iconoir/play-solid/",
  },
  pause: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
        ></path>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/ic/round-pause/",
  },
  reset: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        width="0.9em"
        height="0.9em"
      >
        <path
          fill="currentColor"
          d="M524.8 106.666667c-106.666667 0-209.066667 42.666667-285.866667 110.933333l-8.533333-68.266667c0-25.6-21.333333-42.666667-46.933333-38.4-25.6 0-42.666667 21.333333-38.4 46.933334l8.533333 115.2c4.266667 55.466667 51.2 98.133333 106.666667 98.133333h8.533333L384 362.666667c25.6 0 42.666667-21.333333 38.4-46.933334 0-25.6-21.333333-42.666667-46.933333-38.4l-85.333334 4.266667c64-55.466667 145.066667-89.6 230.4-89.6 187.733333 0 341.333333 153.6 341.333334 341.333333s-153.6 341.333333-341.333334 341.333334-341.333333-153.6-341.333333-341.333334c0-25.6-17.066667-42.666667-42.666667-42.666666s-42.666667 17.066667-42.666666 42.666666c0 234.666667 192 426.666667 426.666666 426.666667s426.666667-192 426.666667-426.666667c4.266667-234.666667-187.733333-426.666667-422.4-426.666666z"
        />
      </svg>
    ),
    src: "https://www.veryicon.com/icons/miscellaneous/component-usage/reset-16.html",
  },
  settings: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11 11 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.5 11.5 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11 11 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.5 11.5 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.9 8.9 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.4 9.4 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.9 8.9 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.4 9.4 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"
        ></path>
        <path
          fill="currentColor"
          d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"
        ></path>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/carbon/settings/",
  },
  settings2: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
          <path
            fill="currentColor"
            d="M16 15c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h9.17A3.001 3.001 0 0 1 16 15m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2M8 9a3 3 0 0 1 2.762 1.828l.067.172H20a1 1 0 0 1 .117 1.993L20 13h-9.17a3.001 3.001 0 0 1-5.592.172L5.17 13H4a1 1 0 0 1-.117-1.993L4 11h1.17A3.001 3.001 0 0 1 8 9m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8-8c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17A3.001 3.001 0 0 1 16 3m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
          ></path>
        </g>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/mingcute/settings-6-line/",
  },
  info: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12M128 72c-22.06 0-40 16.15-40 36v4a8 8 0 0 0 16 0v-4c0-11 10.77-20 24-20s24 9 24 20s-10.77 20-24 20a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-.72c18.24-3.35 32-17.9 32-35.28c0-19.85-17.94-36-40-36m104 56A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"
        ></path>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/ph/question/",
  },
  mute: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 36 36"
      >
        <path
          fill="currentColor"
          d="M3.61 6.41L9.19 12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.14l7.41 7.47A2 2 0 0 0 18 32a2 2 0 0 0 .76-.15A2 2 0 0 0 20 30v-7.23l5.89 5.89c-.25.15-.49.29-.75.42a1 1 0 0 0 .9 1.79a14.4 14.4 0 0 0 1.31-.75l2.28 2.28L31 31L5 5ZM18 30l-7.73-7.77a1 1 0 0 0-.71-.23H4v-8h5.64a1 1 0 0 0 .71-.3l.26-.26L18 20.81Z"
          className="clr-i-outline clr-i-outline-path-1"
        ></path>
        <path
          fill="currentColor"
          d="M24.89 6.69A12.42 12.42 0 0 1 29 26.1l1.42 1.42a14.42 14.42 0 0 0-4.66-22.64a1 1 0 1 0-.87 1.8Z"
          className="clr-i-outline clr-i-outline-path-2"
        ></path>
        <path
          fill="currentColor"
          d="M22.69 12.62A6.27 6.27 0 0 1 25.8 18a6.17 6.17 0 0 1-1.24 3.71L26 23.13A8.15 8.15 0 0 0 27.8 18a8.28 8.28 0 0 0-4.1-7.11a1 1 0 1 0-1 1.73Z"
          className="clr-i-outline clr-i-outline-path-3"
        ></path>
        <path
          fill="currentColor"
          d="M18 6v9.15l2 2V6a2 2 0 0 0-3.42-1.41L12 9.17l1.41 1.41Z"
          className="clr-i-outline clr-i-outline-path-4"
        ></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/clarity/volume-mute-line/",
  },
  sound: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M1 13.857v-3.714a2 2 0 0 1 2-2h2.9a1 1 0 0 0 .55-.165l6-3.956a1 1 0 0 1 1.55.835v14.286a1 1 0 0 1-1.55.835l-6-3.956a1 1 0 0 0-.55-.165H3a2 2 0 0 1-2-2Z"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.5 7.5S19 9 19 11.5s-1.5 4-1.5 4m3-11S23 7 23 11.5s-2.5 7-2.5 7"
          ></path>
        </g>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/iconoir/sound-high/",
  },
  pomodoro: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
      >
        <path
          fill="#45413c"
          d="M5.97 44.65a18.03 2.35 0 1 0 36.06 0a18.03 2.35 0 1 0-36.06 0"
          opacity={0.15}
        ></path>
        <path
          fill="#ff6242"
          d="M28.85 9.51h-9.7c-9 0-16.32 6.66-16.32 15.68C2.83 35.22 11 44 21 44h6c10 0 18.18-8.78 18.18-18.81c-.01-9.02-7.32-15.68-16.33-15.68"
        ></path>
        <path
          fill="#e04122"
          d="M27 38.64h-6c-9.11 0-16.62-7.22-18-16a15.71 15.71 0 0 0-.23 2.6C2.83 35.22 11 44 21 44h6c10 0 18.18-8.78 18.18-18.81a15.71 15.71 0 0 0-.23-2.6C43.61 31.42 36.1 38.64 27 38.64"
        ></path>
        <path
          fill="none"
          stroke="#45413c"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M28.85 9.51h-9.7c-9 0-16.32 6.66-16.32 15.68C2.83 35.22 11 44 21 44h6c10 0 18.18-8.78 18.18-18.81c-.01-9.02-7.32-15.68-16.33-15.68"
        ></path>
        <path
          fill="#6dd627"
          d="M24.19 15.93a31.79 31.79 0 0 1 8.65 3.78a.78.78 0 0 0 1.18-.8a9.33 9.33 0 0 0-2.94-5.6a.76.76 0 0 1 .08-1.24a14.89 14.89 0 0 1 4.14-1.35a.78.78 0 0 0 .21-1.46a10.35 10.35 0 0 0-6-1.22a8 8 0 0 0-4.91 2.37a.8.8 0 0 1-1.16 0A8 8 0 0 0 18.51 8a10.35 10.35 0 0 0-6 1.22a.78.78 0 0 0 .21 1.46a14.89 14.89 0 0 1 4.14 1.35a.76.76 0 0 1 .08 1.24A9.33 9.33 0 0 0 14 18.91a.78.78 0 0 0 1.18.8a31.79 31.79 0 0 1 8.65-3.78a.81.81 0 0 1 .36 0"
        ></path>
        <path
          fill="#9ceb60"
          d="M12.7 10.72c.38.07.79.17 1.2.27a9.58 9.58 0 0 1 4.61-.6a8 8 0 0 1 4.91 2.37a.8.8 0 0 0 1.16 0a8 8 0 0 1 4.91-2.37a9.58 9.58 0 0 1 4.61.6c.41-.1.82-.2 1.2-.27a.78.78 0 0 0 .21-1.46a10.35 10.35 0 0 0-6-1.22a8 8 0 0 0-4.91 2.37a.8.8 0 0 1-1.16 0A8 8 0 0 0 18.51 8a10.35 10.35 0 0 0-6 1.22a.78.78 0 0 0 .19 1.5"
        ></path>
        <path
          fill="none"
          stroke="#45413c"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24.19 15.93a31.79 31.79 0 0 1 8.65 3.78a.78.78 0 0 0 1.18-.8a9.33 9.33 0 0 0-2.94-5.6a.76.76 0 0 1 .08-1.24a14.89 14.89 0 0 1 4.14-1.35a.78.78 0 0 0 .21-1.46a10.35 10.35 0 0 0-6-1.22a8 8 0 0 0-4.91 2.37a.8.8 0 0 1-1.16 0A8 8 0 0 0 18.51 8a10.35 10.35 0 0 0-6 1.22a.78.78 0 0 0 .21 1.46a14.89 14.89 0 0 1 4.14 1.35a.76.76 0 0 1 .08 1.24A9.33 9.33 0 0 0 14 18.91a.78.78 0 0 0 1.18.8a31.79 31.79 0 0 1 8.65-3.78a.81.81 0 0 1 .36 0"
        ></path>
        <path
          fill="#6dd627"
          stroke="#45413c"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.43 13.14a9.87 9.87 0 0 1 2.37-6.73A1.46 1.46 0 0 1 25.85 6a2.26 2.26 0 0 1 1 .22a1.1 1.1 0 0 1 .39 1.69a17.32 17.32 0 0 0-2.11 5.25"
        ></path>
      </svg>
    ),
    src: "https://icon-sets.iconify.design/streamline-emojis/tomato/",
  },
  close: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7 7l10 10M7 17L17 7"
        />
      </svg>
    ),
    src: "https://icon-sets.iconify.design/iconamoon/close/",
  },
};

export default pomodoroIcons;
