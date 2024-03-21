
import glance1 from '../assets/glance1.jpg'

const Card = ({ title, image }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
      <img className="w-full h-[50vh] object-cover object-center" src={image} alt="Card" />
      <div className="p-4">
        <h2 className="text-center">{title}</h2>
      </div>
    </div>
  );
};


const Indo_researchBox = () => {
  return (
    <>

            <div className="flex text-center p-3">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">INDO ORGANICS AT GLANCE</h1>
            </div>
      <div className="flex flex-wrap justify-center">
        <Card
          title="RESEARCH"
          image={glance1}
        />
        
         <Card
          title="HAPPY FARMER"
          image="https://t4.ftcdn.net/jpg/03/76/16/79/360_F_376167961_QsDy4ZKc4n8dC5ac1oiqu72HU7Y0J86Z.jpg"
        />
         <Card
          title="GROWTH"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTt9iFLY6rwTma9LyB7Ly_ZpC20mnqtCp-U2XNhiJiLC22HdLmZZNj4Mzi00OA1DNKZU&usqp=CAU"
        />

      </div>



    </>
  )
}

export default Indo_researchBox