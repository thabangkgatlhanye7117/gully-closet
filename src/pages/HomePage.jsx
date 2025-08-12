

const HomePage = () => {

    return(

        <article className ="home-page">

                <section className="hero-section">
                    <div className="hero-buttons">
                        <button className="hero-btn">SHOP APPAREL</button>
                        <button className="hero-btn">SHOP FOOTWEAR</button>
                    </div>
                </section>
                <section className="new-arrivals-section">
                    <h3 className="new-arrivals-title">
                        New Arrivals
                    </h3>
                   { /*maping through new arrives two rows */}
                </section>
                <section className="business-offerings-section">
                    <div className="business-offerings">

                    </div>
                    <div className="tagline">
                        <span>High-end fashion made</span>
                        <span>accessible,</span>
                        <span>For everyone.</span>
                    </div>

                </section>
                <section className="categories-section">
                     <h3 className="categories-title">
                        Categories
                    </h3>
                    <div className="clothing-categories">

                    </div>
                    <div className="shops-category">

                    </div>
                </section>
                
        </article>

    )
}

export default HomePage