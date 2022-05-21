import { css } from 'twin.macro';

export const AnimationCSS = css`
  @keyframes loader-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }

  @keyframes spinner-search {
    0% {
      transform: scale(0);
    }
    30% {
      transform: scale(1);
    }
    50% {
      transform: scale(1);
    }
    80% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes show-opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes spinner-dot {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }

    30% {
      opacity: 1;
    }

    50% {
      opacity: 1;
    }
  }

  @keyframes face-move {
    33% {
      top: 0px;
    }
    66% {
      top: 20px;
    }
    100% {
      top: 0px;
    }
  }

  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes moveRightOut {
    0% {
      opacity:          80%;
      transform-origin: 0 0;
      transform:        translateX(-10%);
    }
    50% {
      opacity:          1;
      transform-origin: 0 0;
      transform:        translateX(0);
    }
    100% {
      opacity:          80%;
      transform-origin: 0 0;
      transform:        translateX(-10%);
    }
  }

  @keyframes moveLeftOut {
    0% {
      opacity:          50%;
      transform-origin: 0 0;
      transform:        translateX(10%);
    }
    50% {
      opacity:          1;
      transform-origin: 0 0;
      transform:        translateX(0);
    }
    100% {
      opacity:          50%;
      transform-origin: 0 0;
      transform:        translateX(10%);
    }
  }
`;
