import "../component/drawerMenu";
import $ from "jquery";

function DrawerInitiator() {
  $(".toggle").on("click", () => {
    const checkBox = $("#checkbox2");
    checkBox.prop("checked", !checkBox.prop("checked"));
    $(".nav-list").toggleClass("menu-view").siblings().removeClass("menu-view");
  });
}

export default DrawerInitiator;
