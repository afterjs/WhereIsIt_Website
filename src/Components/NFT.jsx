import React from "react";
import nft3 from "../Assets/NFTs/nft3.png"
import nft1 from "../Assets/NFTs/nft1.png"
import nft2 from "../Assets/NFTs/nft2.png"
import nft4 from "../Assets/NFTs/nft4.png"

export default props => {
    return (
        <div className="nftSection" id="nfts">
            <h1 className="nftHead">NFTs</h1>
            <div className="nftFlex">
                <div className="nftImages">
                    <img src={nft3} className="userImage nftImage"></img>
                    <p className="nftText">NFTs</p>
                    <img src={nft1} className="userImage nftImage"></img>
                    <p className="nftText">NFTs</p>
                </div>
                <div className="nftImages">
                    <img src={nft2} className="userImage nftImage"></img>
                    <p className="nftText">NFTs</p>
                    <img src={nft4} className="userImage nftImage"></img>
                    <p className="nftText">NFTs</p>
                </div>
            </div>
        </div>
    )

}