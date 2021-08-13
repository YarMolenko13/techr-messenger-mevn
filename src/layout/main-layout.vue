<template>
	<div class="main-layout">
    <router-view></router-view>
    <div class="footer">
      <div class="footer__body">
        <p>Techr<br/>messenger.</p>
        <span>All rights amogused.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main.layout"
};
</script>

<style lang="scss">
$footer-hight: 135px;
.main-layout {
   height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.footer {
	margin-top: 50px;
   width: 100%;
   background: #2B2664;
   display: flex;
	flex: 0 0 $footer-hight;
   flex-direction: column;
   // align-items: center;
   justify-content: center;
	// .footer__body
	&__body {
   	padding: 0 200px;
		p {
			font-size: 18px;
			line-height: 22px;
			color: #F7F7F7;
		}
		span { 
			display: inline-block;
			margin-top: 5px;
			font-size: 14px;
			// line-height: 22px;
			color: rgba(247, 247, 247, 0.3);
		}
	}
}
@media (max-width: 426px) {
	$footer-hight: 90px;
	// .main-layout {
	// 	padding-bottom: $footer-hight + 40px;
	// }
	.footer {
		flex: 0 0 $footer-hight;
		.footer__body {
   	padding: 0 40px;
			p {
				font-size: 14px;
				line-height: 18px;
				color: #F7F7F7;
			}
			span { 
				display: inline-block;
				margin-top: 5px;
				font-size: 14px;
				// line-height: 22px;
				color: rgba(247, 247, 247, 0.3);
		}
	}
	}
}
</style>