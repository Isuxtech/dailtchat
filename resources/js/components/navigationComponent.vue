<template>
    <nav>
        <div class="brand">
            <h2 class="logo">Dailychats</h2>
            <div class="hamburger">d</div>
        </div>
        <div class="navbar">
            <router-link to="/" class="nav-item"> Home </router-link>
            <router-link :to="{name:'articles'}" class="nav-item"> Home </router-link>
        </div>
        <div class="account">
            Account
        </div>
    </nav>
</template>
