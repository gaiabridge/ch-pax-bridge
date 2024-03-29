"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const KlaytnPaxContract_1 = __importDefault(require("../contracts/KlaytnPaxContract"));
const PaxSenderContract_1 = __importDefault(require("../contracts/PaxSenderContract"));
class Form extends skynode_1.DomNode {
    constructor(swaper, chainId, isFrom = false) {
        super(".form");
        this.swaper = swaper;
        this.chainId = chainId;
        this.isFrom = isFrom;
        this.connectHandler = async () => {
            this.fireEvent("connect");
            this.loadBalance();
        };
        this.transferHandler = async (from, to) => {
            const owner = await this.sender?.loadAddress();
            if (from === owner || to === owner) {
                this.loadBalance();
            }
        };
        this.sendOverHorizonHandler = async (sender, toChain, receiver, sendId, amount) => {
            this.swaper.receiveOverHorizon(receiver, toChain, sender, sendId, amount);
            const owner = await this.sender?.loadAddress();
            if (sender === owner) {
                this.swaper.addSended(sender, receiver, sendId);
            }
        };
        this.append((0, skynode_1.el)(".chain", this.chainIcon = (0, skynode_1.el)("img", { src: "/images/shared/logo/pax.png", alt: "chain logo" }), isFrom ? (0, skynode_1.el)("p", "FROM") : (0, skynode_1.el)("p.help-text", "TO"), this.chainSelect = (0, skynode_1.el)("select", (0, skynode_1.el)("option", "Klaytn", {
            value: "8217",
        }), (0, skynode_1.el)("option", "Polygon", {
            value: "137",
        }), {
            change: () => {
                const originChainId = this.chainId;
                this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                this.fireEvent("changeChain", this.chainId, originChainId);
            },
        })), (this.balanceDisplay = (0, skynode_1.el)(".balance")), (this.inputContainer = (0, skynode_1.el)(".input-container")), (this.buttonContainer = (0, skynode_1.el)(".button-container")));
        this.changeChain(chainId);
    }
    async changeChain(chainId) {
        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);
        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendOverHorizon", this.sendOverHorizonHandler);
        if (chainId === 137) {
            this.sender = PaxSenderContract_1.default;
            this.chainIcon.domElement.src = "/images/shared/icn/icn-polygon.svg";
        }
        else if (chainId === 8217) {
            this.sender = KlaytnPaxContract_1.default;
            this.chainIcon.domElement.src = "/images/shared/icn/icn-klaytn.svg";
        }
        await this.loadBalance();
        this.sender?.on("connect", this.connectHandler);
        this.sender?.on("Transfer", this.transferHandler);
        this.sender?.on("SendOverHorizon", this.sendOverHorizonHandler);
    }
    async loadBalance() {
        this.inputContainer.empty();
        this.buttonContainer.empty();
        if (this.sender !== undefined) {
            const owner = await this.sender.loadAddress();
            if (owner !== undefined) {
                const balance = await this.sender.balanceOf(owner);
                this.balanceDisplay
                    .empty()
                    .appendText(`${ethers_1.utils.formatUnits(balance)} PAX`);
                this.buttonContainer.append((0, skynode_1.el)("a.add-token-to-wallet-button", "지갑에 토큰 추가하기", {
                    click: () => {
                        this.sender?.addTokenToWallet();
                    },
                }));
                if (this.isFrom === true) {
                    const input = (0, skynode_1.el)("input", {
                        placeholder: "보낼 수량",
                    });
                    input.appendTo(this.inputContainer);
                    this.buttonContainer.append((0, skynode_1.el)("a.send-button", "보내기", {
                        click: () => this.swaper.sendOverHorizon(ethers_1.utils.parseEther(input.domElement.value)),
                    }));
                }
            }
            else {
                this.balanceDisplay.empty().appendText("잔액 불러오기 실패");
                this.buttonContainer.append((0, skynode_1.el)("a.connect-button", "지갑 연결", {
                    click: () => this.sender?.connect(),
                }));
            }
        }
    }
    delete() {
        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendOverHorizon", this.sendOverHorizonHandler);
        super.delete();
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map