<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal()
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
    <slot name="modal-contents" />
    <button 
      class="btn"
      on:click={dialog.close()}>
      Close
    </button>
	</div>
</dialog>

<style lang="scss">
	dialog {
    background-color: $color--white;
		width: 50%;
		border-radius: 5px;
		border: none;
		padding: 0;
    .btn {
      margin-top: 30px;
      width: 100%;
      height: 50px;
      padding: 0 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      background-color: $color--primary;
      font-weight: 700;
      color: $color--white;
      outline: none;
      transition: .4s;
      @media #{$mobile} {
        grid-column: 1 / -1;
      }
      &:hover {
        background-color: lighten($color--primary, 10%);
      }
    }
	}
	dialog::backdrop {
		background: $color--black-70;
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>