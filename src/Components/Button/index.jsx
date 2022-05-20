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

export const ButtonCSS = {
    ButtonPrimary,
    ButtonEscape
}
