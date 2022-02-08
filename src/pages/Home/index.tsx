import * as SC from './styles';
import { useState } from 'react';
import Modal from '../../components/Modal';
import Particle from '../../components/Particle';
import logo from '../../assets/react.svg';

export default function MainPage() {
    const [hover, setHover] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    return(
        <SC.Container>
            {
                openModal
                ? (
                <Modal
                    visible={openModal}
                    handleVisibility={setOpenModal}
                />
                ) : null
            }
            <SC.Content>
                <SC.Logo 
                    src={logo}
                    // height={50}
                />
                <SC.Title>
                    João Pedro Leopoldino
                </SC.Title>
                <SC.Text>
                    Yoo! ✌️ I’m Benjamin den Boer,
                    a digital product designer currently working
                    on ✨ <SC.AnchorText>Framer Sites</SC.AnchorText>, a brand new way to publish
                    websites directly from a freeform canvas.
                    We’re in Beta, but you can 🔮 <SC.AnchorText>request access here</SC.AnchorText> to give it a spin.
                </SC.Text>
                <SC.Text>
                    I tweet things from 🐦 <SC.AnchorText>@benjaminnathan</SC.AnchorText>.
                    I’m interested in all things web3 and created 💎 <SC.AnchorText>tokens.page</SC.AnchorText>,
                    a fun way to explore anyone’s NFT collection.
                    My primary ENS domain name is boer.eth,
                    and you can 🌿 <SC.AnchorText>browse my NFTs here</SC.AnchorText>.
                </SC.Text>
                <SC.LinksContainer>
                    <SC.LinkRow
                        onMouseEnter={() => setHover(1)}
                        onMouseLeave={() => setHover(0)}
                    >
                        <SC.LinkDot hover={hover == 1} />
                        <SC.LinkText>Github</SC.LinkText>
                    </SC.LinkRow>
                    <SC.LinkRow
                        onMouseEnter={() => setHover(2)}
                        onMouseLeave={() => setHover(0)}
                    >
                        <SC.LinkDot hover={hover == 2} />
                        <SC.LinkText>Linkedin</SC.LinkText>
                    </SC.LinkRow>
                    <SC.LinkRow
                        onMouseEnter={() => setHover(3)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setOpenModal(true)}
                    >
                        <SC.LinkDot hover={hover == 3} />
                        <SC.LinkText>Email</SC.LinkText>
                    </SC.LinkRow>
                </SC.LinksContainer>
            </SC.Content>
            <Particle/>
        </SC.Container>
    );
}