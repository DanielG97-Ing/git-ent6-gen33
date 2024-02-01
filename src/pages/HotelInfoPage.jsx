import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import OtherHotels from "../components/HotelInfoPage/OtherHotels";
import ReservationsHotel from "../components/HotelInfoPage/ReservationsHotel";
import CommentsSection from "../components/HotelInfoPage/styles/CommentsSection";
import SliderImg from "../components/HotelInfoPage/SliderImg";
import '../components/shared/styles/HotelInfo.css'

const HotelInfoPage = () => {
  const { id } = useParams();
  
  const url = `https://hotels-api.academlo.tech/hotels/${id}`;
  const [hotel, getHotel] = useFetch(url);
  
  useEffect(() => {
    getHotel();
  }, [id]);
  
  return (
    <div className="hotelInfo__container">
      <div>
        <header className="hotelInfo__title">
          <h2>{hotel?.name}</h2>
        </header>
        <section className="hotelInfo__section">
        <SliderImg hotel={hotel}/>
        <div className="hotelInfo__map">
          {hotel && (
            <Map center={[+hotel.lat, +hotel.lon]} height={300} zoom={17}>
              <Marker
                width={50}
                color="blue"
                anchor={[+hotel.lat, +hotel.lon]}
                />
              <ZoomControl />
            </Map>
          )}
        </div>
        </section>
        <div className="hotelInfo__location">
          <div>
            <span>{hotel?.city.name}, </span>
            <span>{hotel?.city.country}</span>
          </div>
          <p>
            <i className="bx bx-map"></i>
            <span>{hotel?.address}</span>
          </p>
        </div>
        <p className="hotelInfo__desc">{hotel?.description}</p>
      </div>
      <CommentsSection
        hotelId={hotel?.id} 
      />
      {
        localStorage.getItem('token') && ( //solo aparece la reservacion cuando el usuario esta loggeado
          <ReservationsHotel 
            hotelId={hotel?.id}
          />
        )
      }
      <OtherHotels 
       cityId={hotel?.city.id}
       hotelId={hotel?.id}
      />
    </div>
  );
};
export default HotelInfoPage;
