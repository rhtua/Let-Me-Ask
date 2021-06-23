import illustrationImage from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.scss";

import {Button} from "../components/Button";
import {Link} from 'react-router-dom';

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img
                    src={illustrationImage}
                    alt="Ilustração descrevendo perguntas e respostas"
                />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Let Me Ask"/>
                    <h2>Crie uma nova sala</h2>
                    <form>
                        <input type="text" placeholder="Nome da sala"/>
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
