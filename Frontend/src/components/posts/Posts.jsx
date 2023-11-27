import Post from "../post/Post";
import "./posts.scss";
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Sana Khan",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Capturing innocence in a symphony of giggles, where every coo narrates tales of wonder and joy.",
      img: "https://m.media-amazon.com/images/I/71hp8xUElLL.jpg",
    },
    {
      id: 2,
      name: "Akash Yadav",
      userId: 2,
      profilePic:
        "https://images.ctfassets.net/9wtva4vhlgxb/hBEKSPxVzNmgYeszSOUrP/902d76b0aead912c6a662b67e829f484/indian_girl_names_720x432.jpg?fm=webp&q=70",
        desc: "In the embrace of tiny fingers and glistening eyes, love finds its purest expression.",
        img: "https://i.pinimg.com/474x/be/c3/82/bec38299f9cd4a143b8289c3df117759.jpg",
      },
    {
      id: 3,
      name: "Shivangi",
      userId: 3,
      profilePic:
        "https://www.haribhoomi.com/h-upload/2019/08/22/279367-01.webp",
        desc: "Embarking on dreams with each step, her spirit dances in the melody of endless possibilities.",
        img: "https://www.haribhoomi.com/h-upload/2019/08/22/279367-01.webp",
      },
    {
      id: 4,
      name: "Riyanshi",
      userId: 4,
      profilePic:
        "https://www.filmibeat.com/wimgm/500x70/mobi/2017/01/sana-khan_148342167000.jpg",
        desc: "Living life in full bloom. 🌻🌿",
        img: "https://dpwalay.com/wp-content/uploads/2023/07/girls-dp-pic-6.jpg",
    },
    {
      id: 5,
      name: "Jyoti",
      userId: 5,
      profilePic:
        "https://i.pinimg.com/originals/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg",
        desc: "Casual vibes and good times.",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Indian_girl_in_traditional_attire.jpg",
    },
    {
      id: 6,
      name: "Khushi",
      userId: 6,
      profilePic:
        "https://media.nojoto.com/content/media/1575452/2020/03/profile/25f660fc6655bb5b99108a694bdde459_1575452/default.jpg",
        desc: "Just being me, no filter needed. ✨",
        img: "https://pbs.twimg.com/profile_images/1384020245669576707/Ir2i-3Jr_400x400.jpg",
    },
    {
      id: 7,
      name: "Riya Sachan",
      userId: 7,
      profilePic:
        "https://www.filmibeat.com/wimgm/500x70/mobi/2017/01/sana-khan_148342167000.jpg",
        desc: "In a world full of trends, be a classic. 💃🏻✨",
        img: "https://i.pinimg.com/550x/7b/a7/9b/7ba79b40c86a6bf138d0321eac41fa74.jpg",
    },
    {
      id: 8,
      name: "Shreya",
      userId: 8,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuUjHhCZh0M1i-Hm7B-Ha9_dTktvjg6pf1Q&usqp=CAU",
        desc: "Here's to the joy in everyday moments. ",
        img: "https://thumbs.dreamstime.com/z/simple-indian-girl-sweet-smile-happy-face-44021920.jpg",
    },
    {
      id: 9,
      name: "Shivi",
      userId: 9,
      profilePic:
        "https://pics.craiyon.com/2023-07-25/ba7db95c8886404db4ec8c78d83161aa.webp",
        desc: "Keeping it real, always ✨",
        img: "https://i.pinimg.com/originals/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg",
    },

    {
      id: 10,
      name: "Sweta",
      userId: 10,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1Zj1wwgHSa1xm8Rizw-BSja4XGJfkwp9sQ&usqp=CAU",
        desc: "Radiating positivity, one selfie at a time 🌸",
        img: "https://i.pinimg.com/564x/e4/7e/b8/e47eb87df410390035c9f88d7d2e8dcf.jpg",
    },
    {
      id: 11,
      name: "Rachana",
      userId: 11,
      profilePic:
        "https://www.filmibeat.com/wimgm/500x70/mobi/2017/01/sana-khan_148342167000.jpg",
        desc: "Just another day, another selfie 💖",
        img:"https://e0.pxfuel.com/wallpapers/867/753/desktop-wallpaper-simple-indian-girls-indian-beautiful-girl.jpg",
    },
    {
      id: 12,
      name: "Jaya",
      userId: 12,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWr8zSDaBpyuFEcvYhebbZkRGkCicH7MhHg&usqp=CAU",
        desc:"Cheers to being comfortable in my own skin  📸",
        img: "https://images.pexels.com/photos/5341865/pexels-photo-5341865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 13,
      name: "Manisha",
      userId: 13,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbxcv9Zjo80eSvEpkyoac3qtKvxTlpU8Zsw&usqp=CAU",
        desc:"Making memories and embracing every moment. 📸✨",
        img: "https://storage.prompt-hunt.workers.dev/6924cf87-ea35-41f1-bee7-798a89c7f32d",
    },
    {
      id: 14,
      name: "Radha",
      userId: 14,
      profilePic:
        "https://st3.depositphotos.com/6903990/12554/i/450/depositphotos_125546684-stock-photo-portrait-of-beautiful-indian-girl.jpg",
        desc: "Sassy, classy, and a bit smart-assy. 😉💖",
        img: "https://pics.craiyon.com/2023-07-25/e560d9bc325f47118cea8ab524df90cd.webp",
    },
    {
      id: 15,
      name: "Neha",
      userId: 15,
      profilePic:
        "https://i.pinimg.com/736x/1d/1f/86/1d1f86b3f727bafba069220a93baa2ad.jpg",
        desc: "Empowered women empower women. 💪🏼✨",
        img:"https://wallpapercave.com/wp/wp4997662.jpg",
    },
    {
      id: 16,
      name: "Mahi",
      userId: 16,
      profilePic:
        "https://www.filmibeat.com/wimgm/500x70/mobi/2017/01/sana-khan_148342167000.jpg",
        desc: "Living my best life, one adventure at a time. 💫",
        img: "https://pics.craiyon.com/2023-07-25/ba7db95c8886404db4ec8c78d83161aa.webp",
    },
    {
      id: 17,
      name: "Mohini",
      userId: 17,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPobZ65mJF0aE05onANh4Wfq71JGIg0fp6g&usqp=CAU",
        desc: "I'm not bossy, I just have better ideas. 💡💁‍♀️",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1Zj1wwgHSa1xm8Rizw-BSja4XGJfkwp9sQ&usqp=CAU",
    },
    {
      id: 18,
      name: "Ruhi",
      userId: 18,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtLTl4Ml9lNbsP9w7ks0JAlR-gHOd9FFr8A&usqp=CAU",
        desc: "Life's too short to not slay every day. 💁‍♀️💄",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzWiySZ4SaAiiI_oGaCJJW0aDV1uPTOGA1g&usqp=CAU",
    },
    {
      id: 19,
      name: "Akanksha",
      userId: 19,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwwPrHmQQ74xHeyvxRaL79jsY7I-5_ipBUQ&usqp=CAU",
        desc: "Know your worth, then add tax. 💰✨",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtLTl4Ml9lNbsP9w7ks0JAlR-gHOd9FFr8A&usqp=CAU",
    },
    {
      id: 20,
      name: "Divya",
      userId: 20,
      profilePic:
        "https://apudu.files.wordpress.com/2013/01/wpid-most-beautiful-bangali-girl-in-saree-1.jpg",
        desc: "Elegance with a hint of rebellion. 💃🔥",
        img: "https://apudu.files.wordpress.com/2013/01/wpid-most-beautiful-bangali-girl-in-saree-1.jpg",
    },
  ];
  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};
export default Posts;