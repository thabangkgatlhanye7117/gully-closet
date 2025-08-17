

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
                   {/*maping through new arrives two rows */}
                </section>
                <section className="business-offerings-section">
                    <div className="business-offerings">
                        <div className="offering">
                            <i className="ri-checkbox-circle-line"></i>
                            <h3>SELLING AUTHENTIC THRIFT APPAREL</h3>
                            <span>Premium apparel, verified for authenticity and origin</span>
                        </div>
                           <div className="offering">
                            <i className="ri-truck-line"></i>
                            <h3>NATIONWIDE SHIPPING</h3>
                            <span>We deliver anywhere in South Africa fast, reliable and secure</span>
                        </div>
                           <div className="offering">
                            <i className="ri-phone-line"></i>
                            <h3>OUR SERVICES</h3>
                            <span>Selling, consigning, styling and designing</span>
                        </div>

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