/*import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";
import { useParams } from 'react-router-dom'

export function Event() {

    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ?
                    <Video lessonSlug={slug}/>
                    : <div className="flex-1"></div>}
                <SideBar />
            </main>
        </div>
    )
}*/

import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";
import { useParams } from 'react-router-dom'

export function Event() {

    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 flex-col md:flex-row">
                {slug ?
                    <Video lessonSlug={slug} />
                    : <div className="flex-1"></div>}
                <SideBar />
            </main>
        </div>
    )
}

// side /*className="w-full md:w-1/4" /*
// video className="w-full md:w-3/4"