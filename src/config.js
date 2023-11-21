import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";


export const CONFIG = {
  
  //Header 

    headerConfig: [
        {
            id: 1,
            title: "Գլխավոր",
          },
          {
            id: 2,
            title: "Ծառայություններ",
          },
          {
            id: 3,
            title: "Դասընթացներ",
          },
          {
            id: 4,
            title: "Աշխատանք",
          },
          {
            id: 5,
            title: "Կապ",
          },
    ],


   //Home

    home_slider_data : [
      {
        id: 1,
        title: "Global IT-ին Հասանելի բոլորին",
        btn1: "Դասընթացներ",
        btn2: "Ծառայություններ",
        icon: <FiPhoneCall />,
        img: null,
      },
      {
        id: 2,
        title:" ԾՐԱԳՐԱՎՈՐՈՒՄ Սովորի՛ր Փոխի՛ր Աշխարհը ",
        btn1: "Դասընթացներ",
        btn2: "Ծառայություններ",
        icon: <FiPhoneCall />,
        img: null,
      },
      {
        id: 3,
        title: "Սովորի՛ր ԴԻԶԱՅՆ Ստեղծի՛ր Նորը",
        btn1: "Դասընթացներ",
        btn2: "Ծառայություններ",
        icon: <FiPhoneCall />,
        img: null,
      },
    ],

    
    //Footer

    footerFirstListConfig:[
      {
        id: 1,
        title: "Ֆակուլետներ",
        text: null,
      },
      {
        id: 2,
        title:null,
        text: "Վեբ ծրագրավորում"
      },
      {
        id: 3,
        title:null,
        text: "Ծրագրավորում"
      },
      {
        id: 4,
        title:null,
        text: "Մուլտիմեդիա"
      },
    ],

    footerSecondListConfig:[
      {
        id: 1,
        text: "Նախագծեր",
      },
      {
        id: 2,
        text: "Աշխատանք"
      },
      {
        id: 3,
        text: "Մեր մասին"
      },
    ],

    footerThirdListConfig:[
      {
        id: 1,
        text1: "  ք. Երևան Հովսեփ Էմին 123",
        text2: "  +374 98 960 959",
        text3: "  gitedu@bk.ru",
      }
    ],


    //Blog
    blog_Title_Icons_Data:[
      {
        id: 1,
        icon: <FaTwitter />
      },
      {
        id: 2,
        icon: <FaFacebookSquare />

      },
      {
        id: 3,
        icon: <TiSocialInstagram />
      },
      {
        id: 4,
        icon: <FaLinkedinIn />
      },
    ]
}


