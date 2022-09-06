import { useEffect, useState } from "react";
import { getDoctor } from "../../helper/fetchData";
import CardTop from "../../image/photo.jpg";
import card from "./card.scss";

const Card = ({ active, doctorId }) => {
    const [currentDoctor, setCurrentDoctor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!currentDoctor) {
            setIsLoading(true);
            getDoctor(doctorId)
                .then((data) => setCurrentDoctor(data))
                .finally(() => setIsLoading(false));
        }
    }, [doctorId]);

    return (
        <div className="doctor">
            {!isLoading && currentDoctor && (
                <>
                    <div className="doctor__header">
                        <section className="doctor__title">
                            <div>
                                <figure>
                                    <img src={CardTop} alt="this is doctor" />
                                </figure>
                            </div>
                            <div className="doctor__description">
                                <h3 className="doctor__name">
                                    {currentDoctor.name}
                                </h3>
                                <p>{currentDoctor.description}</p>
                                <div className="doctor__expreience">
                                    <span>{currentDoctor.rate}%</span>
                                    <span> ({currentDoctor.review}) نظر</span>
                                    <span>
                                        {currentDoctor.expreience} سال تجربه
                                    </span>
                                </div>
                            </div>
                        </section>
                        <span>{currentDoctor.see}</span>
                    </div>
                    <div className="doctor__address">
                        {/* <svg></svg> */}
                        <p>{currentDoctor.address}</p>
                    </div>
                    <div className="doctor__first_net_date">
                        <span>
                            {`فعال شدن نوبت دهی اینترنتی  ${currentDoctor.firstActiveDate}`}
                        </span>
                    </div>
                    <div className="doctor__first_date">
                        اولین نوبت: <span>{currentDoctor.firstSection}</span>
                    </div>
                    <button> نوبت دهی اینترنتی</button>
                </>
            )}
            {/* {isLoading && <Spinner />} */}
        </div>
    );
};

export default Card;
