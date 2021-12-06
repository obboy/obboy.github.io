<script>
import './tailwind.css';
</script>
<main class="h-screen bg-atom-light-dark flex justify-center items-center">
<section class="animation h-52 w-52 bg-atom-light-dark rounded-full relative flex justify-center items-center overflow-hidden">
    <!-- <h2 class="text-2xl h-full w-full flex justify-center items-center">O</h2> -->
</section>
</main>
<style>
    section::before{
        content: "";
        height: 120%;
        width: 50%;
        display: block;
        background-color: #1abc9c;
        animation: rotate 4s linear 0s infinite normal forwards;
        box-shadow: 1px 1px 10px #1abc9c;
    }
    @keyframes rotate{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    section::after{
        content: "";
        inset: 4px;
        border-radius: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        font-family: 'Handlee', cursive;
        font-style: italic;
        color: #1abc9c;
        text-shadow: 0px 0px 5px #1abc9c;
        font-weight: 700;
        animation: rotate 4s linear 0s infinite normal forwards;
        background-color: #34495e;
    }
</style>