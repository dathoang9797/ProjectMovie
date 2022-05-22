import tw, {styled} from 'twin.macro'
import {DrawerCSS} from "./DrawerCSS";
const SidebarInner = styled.div`
  ${tw`flex flex-col h-full w-full`}
  ${DrawerCSS}
`
export default SidebarInner;
