import './JourncalSection.scss'

function JournalSection() {
    return <section className='explore'>
                <div className="cont">
                    <h2 className="explore__title">The Journal</h2>
                    <p className="explore__subtitle">Our favorite stories about Kintamani and the opportunities you get when you want to travel in Kintamani</p>
                    <div className="explore__cards">
                        <div className="journal__card">
                            <p><strong className="journal__card--tag">SEPT 10, 2022</strong></p>
                            <h4 className='journal__card--title'>Unforgettable Hiking</h4>
                            <p className="journal__card--subtitle">If you want feel Mount Abang and Mount Batur</p>
                        </div>
                        <div className="journal__card">
                            <p><strong className="journal__card--tag">SEPT 11, 2022</strong></p>
                            <h4 className='journal__card--title'>Memorable Lake</h4>
                            <p className="journal__card--subtitle">Trying canoeing or just fell the lake</p>
                        </div>
                    </div>
                    <a href="#" className="explore__link">ALL POST &gt;</a>
                </div>
            </section>
}

export default JournalSection;