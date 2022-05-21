import styled from 'styled-components';
import tw, { css } from 'twin.macro';

export const Article = styled.div`
    ${tw`container bg-gray-900 text-white text-lg font-medium`}
    iframe{${tw`w-full h-100`}}}}  
    h2{${tw`text-white text-3xl font-bold capitalize mt-4 mb-2`}}
    div{${tw`flex items-center`}}
    
`;

export const FilmInfo = styled.ul`
    ${tw`w-1/2`}
    li{${tw`flex`}
        span:first-child{${tw`w-1/2`}}
        span{ 
            a{${tw`text-red-800 mr-1`}
                &:hover{${tw`text-red-600`}}
        }}
    }
`;