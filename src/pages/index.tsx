import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  HomeView,
  ToolView,
  FeatureView,
  OfferView,
  FaqView,
  CreateView,
  ToeknMetadata,
} from "../views";

const Home: NextPage = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetaData, setOpenTokenMetaData] = useState(false);

  return (
    <>
      <Head>
        <title>MemecoinOwner — Launch Your Solana Token</title>
        <meta name="description" content="Create and deploy Solana tokens without writing a single line of code. The all-in-one memecoin platform at memecoinowner.com." />
      </Head>

      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        setOpenCreateModal={setOpenCreateModal}
        setOpenTokenMetaData={setOpenTokenMetaData}
      />
      <FeatureView
        setOpenCreateModal={setOpenCreateModal}
        setOpenTokenMetaData={setOpenTokenMetaData}
      />
      <OfferView />
      <FaqView />

      {openCreateModal && (
        <div className="new_loader relative h-full bg-slate-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      )}

      {openTokenMetaData && (
        <div className="new_loader relative h-full bg-slate-900">
          <ToeknMetadata setOpenTokenMetaData={setOpenTokenMetaData} />
        </div>
      )}
    </>
  );
};

export default Home;
