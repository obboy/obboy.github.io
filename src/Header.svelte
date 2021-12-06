<script>
  import "./tailwind.css";
  var navLinks = [
    {
      name: "Home",
      href: "#",
      condition: "active",
      id: 1,
    },
    {
      name: "About",
      href: "#",
      condition: "inactive",
      id: 2,
    },
    {
      name: "Projects",
      href: "#",
      condition: "inactive",
      id: 3,
    },
    {
      name: "Contributors",
      href: "#",
      condition: "inactive",
      id: 4,
    },
  ];
  let formContent = [
    {
      type: "name",
      label: "Name",
      placeHolder: "Your Name",
      id: "user_name",
    },
    {
      type: "text",
      label: "Email",
      placeHolder: "Your Email Address",
      id: "user_email",
    },
    {
      type: "password",
      label: "Password",
      placeHolder: "Your Top Secret Password",
      id: "user_password",
    },
    {
      type: "password",
      label: "Confirm Your Password",
      placeHolder: "Are You Sure?",
      id: "confirm_user_password",
    },
  ];
  // submitText: 'Signup For New Account',
  // forgotPass: false
  let previousActiveNavMenuIndex = 0;
  function navToggler(i, target) {
    navLinks[previousActiveNavMenuIndex].condition = "inactive";
    previousActiveNavMenuIndex = i;
    navLinks[i].condition = "active";
    navLinks = navLinks;
  }
  var navAuthTogglerText = "Sign In";
  function authToggler() {
    if (navAuthTogglerText === "Sign In") {
      formContent.shift();
      formContent.pop();
      navAuthTogglerText = "Sign Up";
    } else {
      formContent.push({
        type: "password",
        label: "Confirm Your Password",
        placeHolder: "Are You Sure?",
        id: "confirm_user_password",
      });
      formContent.unshift({
        type: "name",
        label: "Name",
        placeHolder: "Your Name",
        id: "user_name",
      });
      navAuthTogglerText = "Sign In";
    }
    formContent = formContent;
    console.log("Toggle Done :)");
  }
</script>

<nav class="nav bg-atom-dark py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-screen">
  <div class="logo font-handlee font-bold tracking-wider text-4xl text-white">
    <h2>OBBOY</h2>
  </div>
  <ul class="nav-links flex justify-center text-xl">
    {#each navLinks as navLink, index (navLink.id)}
      <li
        class="{navLink.condition} mx-2 flex justify-center items-center rounded relative"
        on:click={(target) => {
          navToggler(index, target);
        }}
      >
        <a href="{navLink.href}" class="text-white px-4 py-2 rounded min-h-full h-full w-full">{navLink.name}</a>
      </li>
    {/each}
  </ul>
  <ul class="auths">
    <li class="auth text-xl text-white bg-color-teal px-4 py-2 flex justify-center items-center rounded cursor-pointer" on:click={authToggler}>{navAuthTogglerText}</li>
  </ul>
</nav>
<header class="header">
  <section class="content">
    <article class="content-wrapper">
      <aside class="heading flex flex-col justify-center items-center">
        <h1 class="text-8xl text-color-teal font-handlee font-bold">OBBOY</h1>
        <p class="text-white text-2xl mt-4">The Open Source Community</p>
      </aside>
      <aside class="description flex justify-center items-start">
        <button class="px-6 py-4 bg-color-teal text-white rounded">Contribute Now >></button>
      </aside>
    </article>
  </section>
  <section class="form flex justify-center items-center px-6 py-4">
    <form method="POST" action="" class="p-4 flex flex-col justify-center bg-white w-full rounded shadow-md">
      <fieldset class="px-8 py-6">
        <legend>
          <span class="bg-atom-dark w-full h-full relative text-center text-white text-lg font-bold flex justify-center items-center">{navAuthTogglerText}</span>
        </legend>
        {#each formContent as input}
          <label for={input.id}>{input.label}:</label>
          <input class="border-2 border-solid border-gray-400 px-3 py-2 rounded block w-full mb-4"
            type={input.type}
            placeHolder={input.placeHolder}
            id={input.id} required
          />
        {/each}
      </fieldset>
      <input type="submit" class="border-0 px-3 py-2 rounded block w-full mb-4 bg-color-teal text-white text-lg uppercase font-bold cursor-pointer" value="Submit"/>
    </form>
  </section>
</header>

<style>
  
</style>
