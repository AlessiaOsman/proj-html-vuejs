<script>
export default {
    name: 'NewsLetters',

    data: () => ({
        formText: ''
    }),

    props: {
        newsletter: Object
    }
};
</script>

<template>
    <div class="newsletter container my-3">
        <div class="card">
            <div class="left">
                <h1>{{ newsletter.title }}</h1>
                <p>{{ newsletter.yexy }}</p>
            </div>
            <div class="right">
                <form name="newsletter-form">
                    <input type="text" v-model="formText" :placeholder="newsletter.placeholder">
                    <button class="send-img" href="#"><img src="../../assets/icon/send-icon.png" alt="send-icon"></button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

.card {
    background-color: $bg-card;
    color: $color-link;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border-radius: 20px;

    .left {
        flex-basis: 50%;

        h1 {
            font-family: $orbitron-font;
            font-weight: 500;
        }

        p {
            font-family: $barlow-font;
            font-size: 18px;
        }
    }

    .right {
        flex-basis: 50%;
        text-align: center;

        form {
            position: relative;
        }

        input {
            color: $color-white;
            padding: 12px 55px 12px 15px;
            border: 1px solid lightblue;
            border-radius: 15px;
            margin: 0 10px 0 0;
            width: 50%;
            background-color: rgb(69, 83, 113);
            outline: transparent;

            &:focus {
                border: 1px solid $color-secondary
            }
        }

        .send-img {
            position: absolute;
            right: 160px;
            width: 40px;
            height: 40px;
            bottom: 5px;
            padding: 5px;
            border: 1px solid transparent;
            border-radius: 50%;
            background-color: $color-secondary;

            img {
                max-width: 80%;
            }
        }
    }

}
</style>