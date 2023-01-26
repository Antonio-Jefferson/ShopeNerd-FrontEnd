import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import styled from "styled-components"

export default function CardSkeleton() {
    return (
        <SkeletonTheme baseColor="#949191" highlightColor="#aeaaaa">
            <ConteinerCard>
                <div>
                    <Img>
                        <Skeleton height={170} />
                    </Img>
                    <InfPrice>
                        <p><Skeleton width={90} height={20} /></p>
                        <span><Skeleton width={30} height={20} /></span>
                    </InfPrice>
                    <Description><Skeleton count={3} /></Description>
                </div>

                <AddCart>
                    <Skeleton width={180} height={20} />
                </AddCart>
            </ConteinerCard>
        </SkeletonTheme>
    )
}

const ConteinerCard = styled.div`
    max-width: 250px;
    height: 285px;
    background: #b6b6b6;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    div{
        padding: 8px;
    }
`
const Img = styled.div`
    width:180px;
    height: 180px;
    img{
        width: 100%;
    }

`
const InfPrice = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-weight: 400;
        font-size: 16px;
        color: #b6b6b6;
    }
    span{
        height: 24px;
        background: #b6b6b6;
        border-radius: 5px;
        text-align: center;
        padding: 4px;
        color: #fff;
        font-weight: 700;
        font-size: 12px;
    }
`
const Description = styled.p`
        font-weight: 300;
        font-size: 10px;
        color: #b6b6b6;
        text-align: justify;
`
const AddCart = styled.div`
    display: flex;
    justify-content: center;
    gap: 14px;
    background:#b6b6b6;
    border-radius: 0px 0px 8px 8px;

    font-weight: 600;
    font-size: 14px;
    color: #fff;
`