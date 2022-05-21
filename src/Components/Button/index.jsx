import tw, {styled} from 'twin.macro';

const Button = styled.button`
    ${tw`flex justify-center items-center px-3 py-2 rounded-3xl shadow shadow-lg transition transition-all duration-300 ease-in-out`}
    &:hover {
        ${tw`text-white`}
    }
`

const ButtonPrimary = styled(Button)`
  ${tw`bg-green-500 text-gray-100`}
    &:hover {
    ${tw`bg-green-600 text-white`}
  }
`

const ButtonEscape = styled(Button)`
  ${tw`bg-red-500 text-gray-100`}
    &:hover {
    ${tw`bg-red-600 text-white`}
  }
`

const ButtonNavigationProfile = styled.button`
  ${tw`bg-blue-200 rounded-full w-9 h-9 flex justify-center items-center transition transition-all duration-300 ease-in-out`}
  &:hover{
    ${tw`text-teal-600`}
   }
`

export const ButtonCSS = {
    ButtonPrimary,
    ButtonEscape,
    ButtonNavigationProfile
}
