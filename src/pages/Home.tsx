import Video from '../assets/Playportal_Video.mp4'

export function Home () {

    return (
        <div className='bg-gray-700 flex'>
            <div className='playerWrapper'>
                <video src={Video} loop={true} controls={false} autoPlay muted className='h-96 w-full border-black border-2 p-2.5'/>
            </div>
            <div className="w-96 bg-transparent rounded-lg shadow-lg border-2 mr-5">
                <ul className="divide-y-2 divide-gray-100">
                    <li className="p-3 text-center h-16 pt-4 text-3xl bg-slate-900" style={{color: '#77BF29'}}>
                        Das Netzwerk 
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Kostenfrei
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Vertragsfrei
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Keine Verpflichtungen
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Kompetentes Team
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Austausch von Streamern
                    </li>
                </ul>
            </div>
            <div className="w-96 bg-transparent rounded-lg shadow-lg border-2 mr-5">
                <ul className="divide-y-2 divide-gray-100">
                    <li className="p-3 text-center h-16 pt-4 text-3xl bg-slate-900" style={{color: '#77BF29'}}>
                        Organisationen
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Online & Offline Events
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Marketing und Management
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Planung von Turnieren
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Planung von Projekten
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Einrichtungshilfe
                    </li>
                </ul>
            </div>
            <div className="w-96 bg-transparent rounded-lg shadow-lg border-2 mr-5">
                <ul className="divide-y-2 divide-gray-100">
                    <li className="p-3 text-center h-16 pt-4 text-3xl bg-slate-900" style={{color: '#77BF29'}}>
                        Für deinen Stream 
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Gamekeys
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Gameserver
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Sponsoren
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Musiklizenzen
                    </li>
                    <li className="p-3 text-center text-white text-xl">
                        Impressum Nutzung
                    </li>
                </ul>
            </div>
</div>
    )
}