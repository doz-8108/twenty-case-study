import styled from '@emotion/styled';

import NavCollapseButton from '@/ui/navbar/components/NavCollapseButton';

const TitleAndCollapseContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  width: 100%;
`;

type OwnProps = {
  title: string;
};

export function TopTitle({ title }: OwnProps) {
  return (
    <TitleAndCollapseContainer>
      <NavCollapseButton hideIfOpen={true} hideOnDesktop={true} />
      <TitleContainer data-testid="top-bar-title">{title}</TitleContainer>
    </TitleAndCollapseContainer>
  );
}
