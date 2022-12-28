import styled from "styled-components";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ITooltipContainerProps {
  bottom: number;
  left: number;
}

export const TooltipContainer = styled.div`
  position: fixed;
  background-color: #152536;
  display: block;
  height: fit-content;
  max-width: 300px;
  margin: 5px;
  padding: 15px;
  top: ${({ bottom }: ITooltipContainerProps) => bottom}px;
  left: ${({ left }: ITooltipContainerProps) => left}px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

export const DeepLLogo = styled.img`
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`

export const Translation = styled.p`
  overflow-wrap: break-word;
  margin: 0;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CopyToClipboardIcon = styled(ContentCopyIcon)`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
  }
`