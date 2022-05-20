import tw, {styled} from 'twin.macro';

const CardOutlineProfile = styled.div`
  ${tw`w-full flex-col flex justify-center items-center py-8 bg-teal-50 rounded-3xl shadow shadow-lg mb-2 overflow-hidden`}
`
const AvatarOutline = styled.div`
  ${tw`z-10 rounded-full p-[5px] lg:w-[160px] md:w-[130px] w-[90px] relative`}
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(0deg, red, orange, yellow, green, blue, indigo, violet, red) no-repeat center;
    animation: circle 8s linear infinite;
    z-index: -1;
  }

  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const ButtonShowDrawer = styled.button`
    ${tw`flex justify-center items-center fixed top-8 left-0 text-xl p-4 -ml-4 bg-transparent`}
    &::before {
      content: "";
      ${tw`w-full h-full absolute bg-blue-300 rounded-full top-0 left-0 z-[-1] opacity-[0.5] transform translate-x-[-20%]`}
    }
  animation: moveRightOut 1s ease-in-out infinite;
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
`

export const ProfilePageCSS = {
    CardOutlineProfile,
    AvatarOutline,
    ButtonShowDrawer
}
