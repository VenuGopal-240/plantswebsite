import { HashRouter, Navigate, Outlet, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Shop from './ShowPage/ShowPage';
import Footer from './Footer/Footer';
import { Navbar } from './NavBar/Navbar';
import { ImWhatsapp } from "react-icons/im";
import { Cart } from './Cart/Cart';
import { createContext, useState } from 'react';
import UseMemo from './UseMemo/UseMemo';
import LoginPage from './LoginPage/LoginPage';
import ResponsiveAppBar from './A__Hospital_sample/Example/Header';
import AnchorTemporaryDrawer from './A__Hospital_sample/Slide';
// import MiniDrawer from './A__Hospital_sample/Example/Copy';
import DoctorLoginPage from './A_DoctorMan/DoctorModule.jsx/DoctorLoginPage';
import Definations from './React_Definations/Definations';
import TreeForm from './A__Hospital_sample/Example/Sam';
import Tree from './A__Hospital_sample/Example/Tree';
import OperationForm from './A_DoctorMan/DoctorModule.jsx/Create_OP';
import MainPage from './ResumeTemplate/Mainpage';
import CartWithBadge from './Example/Example';
// import { plant } from './PlantsData/PlantsData';
// import MiniDrawer from './TE/MiniDrawer';
// import { HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
// import LoginPage from './LoginPage/LoginPage';
// import Profile from './TE/Profile';
// import TimeSheet from './TE (1)/TimeSheet';
// import { createContext, useState } from 'react';
// import Admin from './Admin/Admin';
// import Mentee from './Mentee/Mentee';
// import { menteeData } from './Mentee/MenteeData';
// // import StickyHeadTable from './Random';
// import Notification from './Notifications/Notifications';
// import AdminTimeSheet from './Admin/AdminTimeSheet';
// import AdminOperation from './Admin/AdminOperation';
// import Loader from './Loader/Loader';
// import MiniDrawer from './TE (1)/MiniDrawer';
// import TimeSheet from './TE (1)/TimeSheet (1)';
// import Profile from './TE (1)/Profile (1)';
// import LoginPage from './LoginPage (1)/LoginPage (1)';
const plant = [

  { id: 1, name: 'Mango', price: 20, image: 'https://cdn.shopify.com/s/files/1/0062/8532/8445/products/Glenn_Mango_1_BB_1024x1024.jpg?v=1592403209', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A tropical fruit known for its sweetness and nutritional value, widely consumed fresh or in juices and desserts.' },
  { id: 2, name: 'Banana', price: 10, image: 'https://th.bing.com/th/id/OIP.o2nFV4N6wnTPurzHRp56jgHaHa?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A soft, sweet fruit rich in potassium and easy to digest, making it a popular snack and breakfast addition.' },
  { id: 3, name: 'Guava', price: 15, image: 'https://th.bing.com/th/id/OIP.aetwZvZmG8RwmBhJs5XL-gHaEu?w=300&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A tropical fruit known for its distinct flavor and high vitamin C content, often eaten raw or used in jams.' },
  { id: 4, name: 'Papaya', price: 12, image: 'https://th.bing.com/th/id/OIP.eZKLH3CVAaCTKamqXw4jIwHaEK?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A juicy, orange-fleshed fruit with digestive benefits, often consumed fresh or as part of a salad.' },
  { id: 5, name: 'Pomegranate', price: 30, image: 'https://th.bing.com/th/id/OIP.E_Z4IJvH7ibWCBuRXkckaAHaFj?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A fruit prized for its jewel-like seeds and tangy flavor, rich in antioxidants and vitamins.' },
  { id: 6, name: 'Sapota', price: 18, image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/ER/OV/XM/77590722/sapota-fruit-plant-nursery-1000x1000.jpg', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A sweet, brown-fleshed fruit with a grainy texture, often enjoyed fresh as a dessert fruit.' },
  { id: 7, name: 'Watermelon', price: 25, image: 'https://th.bing.com/th/id/OIP.bwRutfpalndNPabSB-_AGgHaHa?w=720&h=720&rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A refreshing summer fruit with high water content and sweet red or yellow flesh.' },
  { id: 8, name: 'Custard Apple', price: 35, image: 'https://th.bing.com/th/id/OIP.ck5utiXtbrRFMQX0tkm6jAHaD4?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A creamy, custard-like fruit with a sweet flavor and soft green skin.' },
  { id: 9, name: 'Jackfruit', price: 50, image: 'https://th.bing.com/th/id/OIP.81XJ7TH6h2m8CqmCjA5aowHaFj?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A large tropical fruit with sweet, fibrous flesh, often used in both savory and sweet dishes.' },
  { id: 10, name: 'Orange', price: 40, image: 'https://th.bing.com/th/id/OIP.eojfr3tGeNS9rMKrbxVGCgAAAA?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'fruits', quantity: 1, cartStatus: false, total: 0, description: 'A citrus fruit loved for its tangy-sweet flavor and high vitamin C content, commonly eaten fresh or juiced.' },

  { id: 11, name: 'Rose', price: 20, image: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A classic flowering plant admired for its vibrant colors and delightful fragrance, ideal for gardens and bouquets.' },
  { id: 12, name: 'Jasmine', price: 10, image: 'https://img2.exportersindia.com/product_images/bc-full/2019/6/4538795/jasmine-plant-1559644197-4936463.jpeg', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A fragrant flowering plant with small white blossoms, often used in garlands and perfumes.' },
  { id: 13, name: 'Marigold', price: 15, image: 'https://th.bing.com/th/id/R.218b89d8e554f4fe9bd9c42b4d7e85d6?rik=y7pXkdVDv9gk0Q&riu=http%3a%2f%2fnurserylive.com%2fcdn%2fshop%2fproducts%2fnurserylive-g-african-marigold-orange-plant-153227.jpg%3fv%3d1679749014&ehk=9UiBcSLzjgpnp9Xml6vb4gp5onUwPreJ881YuyxONN0%3d&risl=&pid=ImgRaw&r=0', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A vibrant and hardy flowering plant commonly used for decoration and religious ceremonies.' },
  { id: 14, name: 'Hibiscus', price: 12, image: 'https://th.bing.com/th/id/OIP.k732H7JAsPAH_1r3k0dD9gHaHa?w=181&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A tropical flowering plant with large, colorful blooms, often associated with beauty and healing properties.' },
  { id: 15, name: 'Lotus', price: 30, image: 'https://th.bing.com/th/id/OIP.E21I7FXeI-7JpCzjdriI2AHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A sacred aquatic flowering plant symbolizing purity and enlightenment, with pink or white blossoms.' },
  { id: 16, name: 'Bougainvillea', price: 18, image: 'https://th.bing.com/th/id/OIP.bcquV6CWXkzBVveXmeYpygHaLH?w=130&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A climbing plant known for its vibrant, papery bracts that add a splash of color to gardens.' },
  { id: 17, name: 'Sunflower', price: 25, image: 'https://th.bing.com/th/id/OIP.Mqb8zBupZyBdxtuDSblw0QHaHt?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A tall flowering plant with bright yellow blooms, valued for its beauty and edible seeds.' },
  { id: 18, name: 'Daisy', price: 35, image: 'https://th.bing.com/th/id/OIP.f3mTlaRiuA5BQtwgr-P0twHaHa?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A cheerful flowering plant with white petals and a yellow center, symbolizing innocence and purity.' },
  { id: 19, name: 'Tulip', price: 50, image: 'https://th.bing.com/th/id/OIP.9aOPoE5mq8oXO_VbQMSw_wHaFj?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A bulbous flowering plant with elegant cup-shaped blooms in a variety of vibrant colors.' },
  { id: 20, name: 'Orchid', price: 40, image: 'https://thumbs.dreamstime.com/z/plant-nursery-orchids-19222.jpg', region: 'Andhra Pradesh', category: 'Flower', quantity: 1, cartStatus: false, total: 0, description: 'A delicate and exotic flowering plant, often used for decorative purposes and admired for its intricate blooms.' },

  { id: 21, name: 'Areca Palm', price: 500, image: 'https://i.pinimg.com/originals/6a/6b/80/6a6b803e1627da8aee273c2a3f9897c0.jpg', region: 'Andhra Pradesh', category: 'Indoor Plant', quantity: 1, cartStatus: false, total: 0, description: 'A popular indoor palm plant known for its feathery fronds and air-purifying properties.' },
  { id: 22, name: 'Snake Plant', price: 300, image: 'https://th.bing.com/th/id/OIP.y_mo79ipmHqTJtaytwVLcAHaHi?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'Indoor Plant', quantity: 1, cartStatus: false, total: 0, description: 'A hardy indoor plant with upright, sword-like leaves, known for its low maintenance and air-cleaning abilities.' },
  { id: 23, name: 'Spider Plant', price: 250, image: 'https://nurserynisarga.in/wp-content/uploads/2019/09/20201201022514_IMG_0072.jpg', region: 'Andhra Pradesh', category: 'Indoor Plant', quantity: 1, cartStatus: false, total: 0, description: 'An adaptable indoor plant with arching green and white striped leaves, excellent for improving air quality.' },
  { id: 24, name: 'Peace Lily', price: 400, image: 'https://th.bing.com/th/id/OIP.NosYtM2mHvQcJc18DMF9JQHaHa?rs=1&pid=ImgDetMain', region: 'Andhra Pradesh', category: 'Indoor Plant', quantity: 1, cartStatus: false, total: 0, description: 'An elegant indoor plant with glossy green leaves and white blooms, associated with peace and purity.' },
  {
    id: 25,
    name: 'Money Plant',
    price: 200,
    image: 'https://th.bing.com/th/id/OIP.acXowH0Ofwy89RN_qm7zKAAAAA?rs=1&pid=ImgDetMain',
    region: 'Andhra Pradesh',
    category: 'Indoor Plant',
    quantity: 1,
    cartStatus: false,
    total: 0,
    description: 'A low-maintenance plant that purifies the air and brings good luck.The Money Plant is believed to attract wealth and prosperity. It is a hardy indoor plant that thrives in indirect sunlight and requires minimal care.',
  },
  {
    id: 26,
    name: 'Aloe Vera',
    price: 150,
    image: 'https://th.bing.com/th/id/R.4517cf278c8b20122b1a3a762b34a6a4?rik=A1q6z4GvZpsWnA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0047%2f9730%2f0847%2fproducts%2fnurserylive-plants-aloe-vera-succulent-plant-16968585871500.jpg%3fv%3d1601351073&ehk=KtlqQgFjrQ0xvsxjhxq4aWn7dhCXyB0XdKo1UA2GDgA%3d&risl=&pid=ImgRaw&r=0',
    region: 'Andhra Pradesh',
    category: 'Indoor Plant',
    quantity: 1,
    cartStatus: false,
    total: 0,
    description: 'A versatile plant known for its medicinal properties and air-purifying capabilities.Aloe Vera is a succulent plant famous for its gel, which is used for skin care, wound healing, and digestive health. It thrives in bright, indirect light.',
  },
  {
    id: 27,
    name: 'Rubber Plant',
    price: 600,
    image: 'https://www.campbellsnursery.com/wp-content/uploads/2020/08/Rubber-Plant-Burgundy.jpg',
    region: 'Andhra Pradesh',
    category: 'Indoor Plant',
    quantity: 1,
    cartStatus: false,
    total: 0,
    description: 'An attractive plant with glossy leaves, ideal for modern interiors.The Rubber Plant is a popular indoor plant that grows well in medium light and adds a touch of elegance with its deep green, glossy leaves.',
  },
  {
    id: 28,
    name: 'Boston Fern',
    price: 350,
    image: 'https://th.bing.com/th/id/OIP.OGF5nAl6gb7yFRrLYM9GCwHaHa?rs=1&pid=ImgDetMain',
    region: 'Andhra Pradesh',
    category: 'Indoor Plant',
    quantity: 1,
    cartStatus: false,
    total: 0,
    description: 'A lush, feathery plant that enhances humidity and improves air quality.The Boston Fern is a classic houseplant that thrives in high humidity and indirect light. It is perfect for bathrooms or shaded corners.',
  },
  {
    id: 29,
    name: 'Bamboo Palm',
    price: 450,
    image: 'https://th.bing.com/th/id/OIP.EAhbRK_iuokaJVMRd0fPsgHaJ3?rs=1&pid=ImgDetMain',
    region: 'Andhra Pradesh',
    category: 'Indoor Plant',
    quantity: 1,
    cartStatus: false,
    total: 0,
    description: 'A tropical plant that adds a touch of greenery and filters indoor air.The Bamboo Palm is a tall, elegant plant that thrives in bright, indirect sunlight and moist soil. It helps in removing toxins from the air.',
  },
  {
    id: 30,
    name: 'ZZ Plant',
    price: 700,
    image: 'https://th.bing.com/th/id/OIP.tEmXxAljbHQjXKE5KacknAHaHa?rs=1&pid=ImgDetMain',
    region: 'Andhra Pradesh',
    category: 'Indoor Plant',
    quantity: 1,
    cartStatus: false,
    total: 0,
    description: 'A hardy plant with shiny, dark green leaves, perfect for low-light areas.The ZZ Plant is known for its drought tolerance and low maintenance. It is an excellent choice for beginners and offices with minimal light.',
  }
];
const Layout = () => (
  <Navbar>
    <Outlet />
  </Navbar>
);

export const MyContext = createContext("");

// export const myProvider = createContext();

function App() {
  // const [userData, setUserData] = useState(sessionStorage.getItem("user"));
  // const [data, setData] = useState(menteeData);
  // const [notification, setNotification] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(true);
  // return (
  //   <myProvider.Provider value={{ userData, setUserData, data, setData, notification, setNotification, isLoaded, setIsLoaded }}>
  //     <Notification />
  //     <Loader />
  //     <HashRouter>
  //       <Routes>
  //         <Route index element={<Navigate to="/loginPage" />} />
  //         <Route path="/loginPage" element={<LoginPage />} />
  //         <Route
  //           path="/header"
  //           element={
  //             <MiniDrawer name={[{ name: "TimeSheet", navigate: "/header/timesheet" }, { name: "Profile", navigate: "/header/profile" }]}>
  //               <Outlet />
  //             </MiniDrawer>
  //           }
  //         >
  //           <Route index element={<Navigate to="/header/timesheet" />} />
  //           <Route path="/header/timesheet" element={<TimeSheet />} />
  //           <Route path="/header/profile" element={<Profile />} />
  //         </Route>
  //         <Route
  //           path="/header"
  //           element={
  //             <MiniDrawer name={[{ name: "TimeSheet", navigate: "/header/admintimesheet" }, { name: "AdminStudentSheet", navigate: "/header/studentlist" }]}>
  //               <Outlet />
  //             </MiniDrawer>
  //           }
  //         >
  //           <Route index element={<Navigate to="/header/admintimesheet" />} />
  //           <Route path="/header/admintimesheet" element={<AdminTimeSheet />} />
  //           <Route path="/header/studentlist" element={<Admin />} />
  //           <Route path="/header/adminoperations" element={<AdminOperation />} />
  //         </Route>
  //         <Route
  //           path="/header"
  //           element={
  //             <MiniDrawer name={[{ name: "MenteeSheet", navigate: "/header/mentee" }]}>
  //               <Outlet />
  //             </MiniDrawer>
  //           }
  //         >
  //           <Route index element={<Navigate to="/header/mentee" />} />
  //           <Route path="/header/mentee" element={<Mentee />} />
  //         </Route>
  //       </Routes>
  //     </HashRouter>
  //   </myProvider.Provider>
  // )

  const [originals, setOriginals] = useState(plant);
  const [plants, setPlants] = useState(plant);
  const [duplicatePlants, setDuplicatesPlants] = useState([]);
  const [userDetails, setUserDetails] = useState();
  const [filter, setFilter] = useState(' ');
  const [order, setOrder] = useState([]);
  return (
    <>
      <div style={{ position: "fixed ", right: "1rem", bottom: "3rem" }}>
        <img src='./icons8-instagram-100.png' alt='logo' width='50vw'/><br/>
        <img src='./icons8-whatsapp-96.png' alt='logo' width='50vw'/><br/>
        <img src='./icons8-mail-48.png' alt='logo' width='50vw'/>

      </div>
      <MyContext.Provider
        value={{
          originals,
          setOriginals,
          plants,
          setPlants,
          duplicatePlants,
          setDuplicatesPlants,
          userDetails,
          setUserDetails,
          filter,
          setFilter,
          order,
          setOrder,
        }
        }
      >

          <HashRouter>
            <Routes>
              <Route index element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/home" element={<Layout />}>
                <Route index element={<Navigate to="/home/home" />} />
                <Route path="/home/home" element={<Home />} />
                <Route path="/home/shop" element={<Shop />} />
                <Route path="/home/cart" element={<Cart/>} />
                <Route path="/home/contact" element={<Contact />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </HashRouter> 
        <Footer/>
      </MyContext.Provider>

    {/* <MainPage/> */}

      {/* <ResponsiveAppBar/>
      <AnchorTemporaryDrawer/> */}

      {/* <MiniDrawer/> */}

      {/* <DoctorLoginPage /> */}
      {/* <HashRouter>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="/login" element={<DoctorLoginPage />} />
            <Route index element={<Navigate to="/home/home" />} />
            <Route path="/home/home" element={<MiniDrawer />} />

          <Route path="/login" element={<DoctorLoginPage />} />
        </Routes>
      </HashRouter> */}
  {/* <OperationForm/> */}
      {/* <Definations/> */}
      {/* <TreeForm/> */}
      {/* <Tree/> */}
    </>
  );
}

export default App;



{/* <HashRouter>
          <Routes>
            <Route index element={<Navigate to="/header" />} />
            <Route path="/header" element={<Layout />}>
              <Route path="/header/home" element={<Home />} />
              <Route path="/header/shop" element={<Shop />} />
              <Route path="/header/cart" element={<Cart/>} />
              <Route path="/header/contact" element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter> */}
