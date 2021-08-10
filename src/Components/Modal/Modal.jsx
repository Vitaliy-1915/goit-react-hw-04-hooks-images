import { useEffect } from "react";
import { Overlay, OverlayModal } from "./Modal.styles";

export default function Modal({ onClose, image }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (event) => {
    if (event.code !== "Escape") {
      return;
    }
    onClose();
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget !== event.target) {
      return;
    }
    onClose();
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <OverlayModal>
        <img src={image.src} alt={image.alt} />
      </OverlayModal>
    </Overlay>
  );
}

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyPress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyPress);
//   }

//   handleKeyPress = (e) => {
//     if (e.code !== "Escape") {
//       return;
//     }
//     this.props.onClose();
//   };

//   handleBackdropClick = (event) => {
//     if (event.currentTarget !== event.target) {
//       return;
//     }

//     this.props.onClose();
//   };

//   render() {
//     const { image } = this.props;

//     return (
//       <Overlay onClick={this.handleBackdropClick}>
//         <OverlayModal>
//           <img src={image.src} alt={image.alt} />
//         </OverlayModal>
//       </Overlay>
//     );
//   }
// }

// export default Modal;
