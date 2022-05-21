import tw, {css} from 'twin.macro';

const EditProfileCSS = css`
  .form-edit-profile .ant-input{
    ${tw`bg-transparent text-right`}
  }
  .form-edit-profile .ant-form-item-required::before{
    ${tw`hidden`}
  }
`

export default EditProfileCSS;
