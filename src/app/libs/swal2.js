import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SwalDefault = Swal.mixin({
  confirmButtonColor: "#1a64f0",
});

const Swal2 = withReactContent(SwalDefault);

export default Swal2;
