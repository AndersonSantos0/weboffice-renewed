import { FaDribbble, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa"
import { SocialButton, SocialTabContainer } from './style'

interface SocialProps {
    style?: {}
}

const SocialTab: React.FC<SocialProps> = ({ style = {} }) => {
    return (
        <SocialTabContainer style={style} >
            <SocialButton>
                <FaDribbble color={"#fff"} />
            </SocialButton>
            <SocialButton>
                <FaInstagram color={"#fff"} />
            </SocialButton>
            <SocialButton>
                <FaFacebookSquare color={"#fff"} />
            </SocialButton>
            <SocialButton>
                <FaLinkedin color={"#fff"} />
            </SocialButton>
        </SocialTabContainer>
    )
}

export default SocialTab