<script>
  import "./tailwind.css";
  var navListItems = [{
      name: "Home",
      iconClass: "fas fa-home",
      href: "#",
      condition: "active",
      id: 1,
  },
  {
      name: "Profile",
      iconClass: "fas fa-user",
      href: "#",
      condition: "inactive",
      id: 2,
  },
  {
      name: "Tasks",
      iconClass: "fas fa-tasks",
      href: "#",
      condition: "inactive",
      id: 3,
  },
  {
      name: "Notifications",
      iconClass: "fas fa-bell",
      href: "#",
      condition: "inactive",
      id: 4,
  },
  {
      name: "Settings",
      iconClass: "fas fa-cog",
      href: "#",
      condition: "inactive",
      id: 5,
  },
  ];
  var previousActiveNavItemIndex = 0;

  function toggleNavIndicator(i) {
      navListItems[i].condition = "active";
      navListItems[previousActiveNavItemIndex].condition = "inactive";
      previousActiveNavItemIndex = i;
  }
  var navCondition = "inactive";
  var chevron = "fa-chevron-right";

  function toggleNav() {
      navCondition = navCondition === "inactive" ? "active" : "inactive";
      chevron =
          chevron === "fa-chevron-right" ? "fa-chevron-left" : "fa-chevron-right";
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<main class="min-h-screen px-4 bg-atom-dark">
  <nav class="h-screen py-4 rounded-md flex flex-col justify-between relative {navCondition}">
      <ul class="h-full w-full flex flex-col justify-between p-2 rounded-md bg-atom-light-dark relative">
          <li>
            <ul>
              {#each navListItems as navList, i (navList.id)}
          <li class="my-2 h-12 flex justify-center items-center rounded-md {navList.condition} hover:bg-atom-dark"
              on:click={(target)=> {
              toggleNavIndicator(i);
              }}
              >
              <a href={navList.href} class="nav-link h-full w-full flex justify-around items-center relative">
                  <span class="{navList.iconClass} text-white font-bold text-center" />
                  <span class="absolute top-2/1 left-full text-white font-bold text-left">{navList.name}</span>
              </a>
          </li>
          {/each}
            </ul>
          </li>
          <li class="my-2 h-12 flex justify-center items-center rounded-md bg-atom-dark">
              <a href="#" class="nav-link h-full w-full flex justify-around items-center relative">
                  <span class="fas fa-sign-out-alt text-white font-bold text-center" />
                  <span class="absolute top-2/1 left-full text-white font-bold text-left">Logout</span>
              </a>
          </li>
      </ul>
      <span class="extender text-white h-12 w-12 bg-color-teal text-atom-dark z-20 absolute rounded-full cursor-pointer"
          on:click={toggleNav}>
          <span class="fas {chevron} text-sm" />
      </span>
  </nav>
</main>

<style>
  nav {
      transition: 0.2s ease-in;
      width: 4.125rem;
  }

  nav.active {
      width: 248px !important;
  }
  nav.active ul li {
      transition: background-color 0.25s ease-in;
  }

  nav ul li a {
      transition-delay: 1s;
  }

  nav ul li a span:last-child {
      width: 75%;
      opacity: 0;
  }

  @keyframes navListName {
      to {
          opacity: 1;
      }
  }
  nav.active ul li a span:first-child{
    transition: 0.25s ease 1s;
  }

  nav ul li.active {
      background-color: #1abc9c;
  }

  nav.active ul li a span {
      position: static;
  }

  nav.active ul li a span:first-child {
      width: 25%;
  }

  nav.active ul li a span:last-child {
      width: 75%;
      animation: navListName 0.25s linear 0.2s 1 normal forwards;
  }

  span.extender {
      top: 50%;
      right: 0;
      transform: translateX(50%);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 7px solid #2c3e50;
  }

  span.extender::before {
      content: "";
      display: block;
      height: 25px;
      width: 25px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-100%, -100%);
      border-bottom-right-radius: 100%;
      box-shadow: 10px 0px 0 0 #2c3e50;
      background-color: #34495e;
  }

  span.extender::after {
      content: "";
      display: block;
      height: 25px;
      width: 25px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-100%, 100%);
      box-shadow: 10px 0px 0 0 #2c3e50;
      border-top-right-radius: 100%;
      background-color: #34495e;
  }
</style>