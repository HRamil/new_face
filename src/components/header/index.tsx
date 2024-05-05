import Logo from "../logo";
import { headerData } from '@/api/headerData'
import HeaderLink from "../headerLink";

//style
import './header.scss'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div>
                    <Logo />
                </div>
                <div className="headerData">
                    {
                        headerData.map(data => {
                            return (
                                <HeaderLink data={data} />
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}