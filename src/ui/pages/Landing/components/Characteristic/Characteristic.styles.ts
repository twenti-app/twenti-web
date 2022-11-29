import styled from 'styled-components';

import { Flex } from 'ui/styles/elements/Flex';

const Icon = styled('img')`
  object-fit: none;
  min-width: 50px;
`;

const Characteristic = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled(Flex)``;

export const Styles = { Characteristic, Icon, Wrapper };
