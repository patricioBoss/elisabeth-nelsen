/*********************/
/*    Menu Active    */
/*********************/
function getClosest(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {
          //nothing
        }
        return i > -1;
      };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
}

export function activateMenu() {
  var menuItems = document.getElementsByClassName("sub-menu-item");
  if (menuItems) {
    let matchingMenuItem = null;
    for (let idx = 0; idx < menuItems.length; idx++) {
      if (menuItems[idx].href === window.location.href) {
        matchingMenuItem = menuItems[idx];
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");

      let immediateParent = getClosest(matchingMenuItem, "li");

      if (immediateParent) {
        immediateParent.classList.add("active");
      }

      parent = getClosest(immediateParent, ".child-menu-item");
      if (parent) {
        parent.classList.add("active");
      }

      let parent = getClosest(parent || immediateParent, ".parent-menu-item");

      if (parent) {
        parent.classList.add("active");

        let parentMenuitem = parent.querySelector(".menu-item");
        if (parentMenuitem) {
          parentMenuitem.classList.add("active");
        }

        let parentOfParent = getClosest(parent, ".parent-parent-menu-item");
        if (parentOfParent) {
          parentOfParent.classList.add("active");
        }
      } else {
        let parentOfParent = getClosest(
          matchingMenuItem,
          ".parent-parent-menu-item"
        );
        if (parentOfParent) {
          parentOfParent.classList.add("active");
        }
      }
    }
  }
}
