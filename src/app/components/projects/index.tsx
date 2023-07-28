import { Title } from "../ui/title"
import { Tabs } from "./tabs"


export default function Projects() {
    return (
        <section className="w-full my-20">
            <div className="container">
                <Title title="Projetos" />
                <Tabs />
            </div>
        </section>
    )
}