import React from "react";
import nft3 from "../Assets/NFTs/nft3.jpg"
import nft1 from "../Assets/NFTs/nft1.jpg"
import nft2 from "../Assets/NFTs/nft2.jpg"
import nft4 from "../Assets/NFTs/nft4.jpg"

export default props => {
    return (
        <div className="nftSection" id="nfts">
            <h1 className="nftHead">NFTs</h1>
            <div className="nftFlex">
                <div className="nftImages">
                    <img src={nft3} className="userImage nftImage"></img>
                    <p className="nftText">#1 Serra da Estrela</p>
                    <img src={nft2} className="userImage nftImage"></img>
                    <p className="nftText">#2 Praia da Areia</p>
                </div>
                <div className="nftImages">
                   

                    <img src={nft1} className="userImage nftImage"></img>
                    <p className="nftText">#3 Anos 2000</p>
                    <img src={nft4} className="userImage nftImage"></img>
                    <p className="nftText">#4 водка</p>
                </div>
            </div>
        </div>
    )

}