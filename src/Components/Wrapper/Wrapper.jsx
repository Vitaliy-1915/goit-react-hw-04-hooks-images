import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import FetchApi from "../FetchApi/FetchImages";
// import { ToastContainer } from 'react-toastify';
import { WrapperContainer } from "./Wrapper.styles";

export default function Wrapper() {
  const [imageName, setImageName] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imageName) {
      return;
    }

    setStatus("pending");

    FetchApi.FetchImages(imageName, page)
      .then((data) => data.hits)
      .then((image) => {
        setImages((images) => [...images, ...image]);
        setStatus("resolved");

        if (page !== setPage) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [imageName, page]);

  const resetState = () => {
    setPage(1);
    setImages([]);
    setStatus("idle");
  };

  const formSubmit = (imageName) => {
    resetState();
    setImageName(imageName);
  };

  const onLoadMore = () => {
    setPage((page) => page + 1);
  };

  const openModal = (src, alt) => {
    setModalIsOpen(true);
    setSelectedImage({ src, alt });
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <WrapperContainer>
      <Searchbar onSubmit={formSubmit} />

      {modalIsOpen && <Modal image={selectedImage} onClose={closeModal} />}

      {status === "idle" && <h1>Start your search </h1>}

      {status === "pending" && (
        <Loader
          type="Watch"
          color="#00BFFF"
          height={300}
          width={300}
          timeout={3000}
        />
      )}

      {status === "rejected" && <h1>{error.message}</h1>}

      {
        status === "resolved" && (
          <ImageGallery images={images} openModal={openModal} />
        )
        // <ToastContainer position="top-center" autoClose={100} closeOnClick={false}/>
      }

      {status === "resolved" && images.length < 1 && <h2>invalid name!!!</h2>}

      {images.length > 0 && <Button onClick={onLoadMore} />}
    </WrapperContainer>
  );
}

// class Wrapper extends Component {
//   state = {
//     imageName: "",
//     page: 1,
//     images: [],
//     modalIsOpen: false,
//     selectedImage: null,
//     status: "idle",
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { images } = this.state;

//     if (prevState.imageName !== this.state.imageName) {
//       this.setState({ status: "pending", page: 1, images: [] });
//       this.getImages();
//       return;
//     }

//     if (prevState.page !== this.state.page) {
//       this.setState({ status: "pending" });
//       this.getImages();
//     }

//     if (prevState.images !== images) {
//       window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }

//   getImages = () => {
//     const { imageName, page } = this.state;
//     FetchApi.FetchImages(imageName, page)
//       .then((data) => data.hits)
//       .then((image) =>
//         this.setState((prevState) => ({
//           images: [...prevState.images, ...image],
//           status: "resolved",
//         }))
//       )
//       .catch((error) => this.setState({ error, status: "rejected" }));
//   };

//   resetState = () => {
//     this.setState({
//       // imageName: "",
//       page: 1,
//       images: [],
//       // modalIsOpen: false,
//       // selectedImage: null,
//       status: "idle",
//     });
//   };

//   formSubmit = (imageName) => {
//     this.resetState();
//     this.setState({ imageName });
//   };

//   onLoadMore = () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }));
//   };

//   openModal = (src, alt) => {
//     this.setState({
//       modalIsOpen: true,
//       selectedImage: { src, alt },
//     });
//   };

//   closeModal = () => this.setState({ modalIsOpen: false });

//   render() {
//     const { images, error, status, selectedImage, modalIsOpen } = this.state;

//     return (
//       <WrapperContainer>
//         <Searchbar onSubmit={this.formSubmit} />

//         {modalIsOpen && (
//           <Modal image={selectedImage} onClose={this.closeModal} />
//         )}

//         {status === "idle" && <h1>Start your search </h1>}

//         {status === "pending" && (
//           <Loader
//             type="Watch"
//             color="#00BFFF"
//             height={300}
//             width={300}
//             timeout={3000}
//           />
//         )}

//         {status === "rejected" && <h1>{error.message}</h1>}

//         {
//           status === "resolved" && (
//             <ImageGallery images={images} openModal={this.openModal} />
//           )
//           // <ToastContainer position="top-center" autoClose={100} closeOnClick={false}/>
//         }

//         {status === "resolved" && images.length < 1 && <h2>invalid name!!!</h2>}

//         {images.length > 0 && <Button onClick={this.onLoadMore} />}
//       </WrapperContainer>
//     );

//     // if (status === "idle") {
//     //   return (
//     //     <WrapperContainer>
//     //       <Searchbar onSubmit={this.formSubmit} />
//     //       {/* <ImageGallery images={images} />  */}
//     //       <h1>Start your search </h1>
//     //     </WrapperContainer>
//     //   );
//     // }

//     // if (status === "pending") {
//     //   return (
//     //     <WrapperContainer>
//     //       <Searchbar onSubmit={this.formSubmit} />
//     //       {/* <ImageGallery images={images} /> */}
//     //       {/* {images.length > 0 && <Button onClick={this.onLoadMore} />} */}
//     //       <Loader
//     //         type="Watch"
//     //         color="#00BFFF"
//     //         height={300}
//     //         width={300}
//     //         timeout={3000}
//     //       />
//     //     </WrapperContainer>
//     //   );
//     // }

//     // if (status === "rejected") {
//     //   return (
//     //     <WrapperContainer>
//     //       <Searchbar onSubmit={this.formSubmit} />
//     //       {/* <ImageGallery images={images} /> */}
//     //       <h1>{error.message}</h1>
//     //     </WrapperContainer>
//     //   );
//     // }

//     // if (status === "resolved") {
//     //   return (
//     //     <WrapperContainer>
//     //       <Searchbar onSubmit={this.formSubmit} />
//     //       <ImageGallery images={images} openModal={this.openModal} />
//     //       {images.length > 0 && <Button onClick={this.onLoadMore} />}
//     //       {images.length < 1 && <h2>invalid name!!!</h2>}
//     //       {modalIsOpen && (
//     //         <Modal image={selectedImage} onClose={this.closeModal} />
//     //       )}
//     //       {/* <ToastContainer
//     //             position="top-center"
//     //             autoClose={100}
//     //             closeOnClick={false}
//     //           /> */}
//     //     </WrapperContainer>
//     //   );
//     // }
//   }
// }

// export default Wrapper;
