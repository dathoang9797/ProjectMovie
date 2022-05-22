import tw, {css} from 'twin.macro';

export const DrawerCSS = css`
  #profile_sidebar .ant-drawer-body {
    padding: 0.75rem;
  }

  #profile_sidebar .ant-drawer-content-wrapper {
    ${tw`w-screen h-screen`}
  }

  #profile_sidebar .ant-drawer-header{
     ${tw`pb-0 absolute top-4 right-4 bg-transparent border-0`}
  }

  #profile_sidebar .ant-drawer-header-close-only {
    ${tw`pb-0 absolute bg-transparent border-0`}
    padding-bottom: 0 !important;
    border:         none !important;
    position:       absolute !important;
    background:     transparent !important;
    right:          1rem;
    top:            1rem;
  }

  #profile_sidebar .ant-drawer-close {
    ${tw`transition-all duration-300 ease-in-out z-[1] text-center self-center text-2xl`}
    color:      #131313;
    transition: all 0.3s ease-in-out;
    animation:  moveLeftOut 1s ease-in-out infinite;
  }

  #profile_sidebar .ant-drawer-close::before {
    ${tw`absolute w-4 h-4 top-0 left-0 transform translate-x-[-0.2rem] z-[-1] rounded-full`}
    content:       '';
    background:    #BFDBFE;
    transform: translateX(-0.2rem);
  }
`
