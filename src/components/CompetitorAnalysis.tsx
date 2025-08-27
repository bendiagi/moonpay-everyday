import React from 'react';
import './CompetitorAnalysis.css';

const CompetitorAnalysis: React.FC = () => {
  const competitors = [
    {
      name: "Revolut",
      fiat_on_off_ramp: "Excellent (bank-native)",
      non_custodial_depth: "Weak",
      everyday_utility: "Medium (card, bills)",
      simplicity_ux: "Strong",
      ecosystem_scope: "Medium (investments, FX)"
    },
    {
      name: "Cash App",
      fiat_on_off_ramp: "Strong (US focus)",
      non_custodial_depth: "Weak",
      everyday_utility: "Medium (P2P, card)",
      simplicity_ux: "Very Strong",
      ecosystem_scope: "Narrow (BTC only for crypto)"
    },
    {
      name: "Coinbase",
      fiat_on_off_ramp: "Strong (global)",
      non_custodial_depth: "Medium (self-custody wallet optional)",
      everyday_utility: "Medium (card, commerce)",
      simplicity_ux: "Medium",
      ecosystem_scope: "Wide (trading, staking, NFT)"
    },
    {
      name: "Crypto.com",
      fiat_on_off_ramp: "Strong",
      non_custodial_depth: "Medium",
      everyday_utility: "Strong (card, perks)",
      simplicity_ux: "Medium",
      ecosystem_scope: "Wide (DeFi, trading, NFTs)"
    },
    {
      name: "Metamask",
      fiat_on_off_ramp: "Weak (limited fiat)",
      non_custodial_depth: "Excellent",
      everyday_utility: "Weak",
      simplicity_ux: "Medium",
      ecosystem_scope: "Medium (DeFi access)"
    },
    {
      name: "Phantom",
      fiat_on_off_ramp: "Weak (Solana-only fiat rails)",
      non_custodial_depth: "Excellent",
      everyday_utility: "Weak",
      simplicity_ux: "Strong (clean UX)",
      ecosystem_scope: "Narrow (Solana ecosystem)"
    },
    {
      name: "MoonPay Everyday",
      fiat_on_off_ramp: "Strong (trusted rails, global)",
      non_custodial_depth: "Strong (non-custodial by default)",
      everyday_utility: "Strong (card, bills, subs)",
      simplicity_ux: "Very Strong (automation, seamless flow)",
      ecosystem_scope: "Focused (everyday utility first, then crypto depth)"
    }
  ];

  const getStrengthColor = (strength: string) => {
    if (strength.includes('Excellent') || strength.includes('Very Strong')) {
      return 'strength-excellent';
    } else if (strength.includes('Strong')) {
      return 'strength-strong';
    } else if (strength.includes('Medium')) {
      return 'strength-moderate';
    } else if (strength.includes('Weak')) {
      return 'strength-weak';
    } else if (strength.includes('Narrow')) {
      return 'strength-narrow';
    } else if (strength.includes('Focused')) {
      return 'strength-focused';
    } else if (strength.includes('Wide')) {
      return 'strength-wide';
    }
    return '';
  };

  return (
    <div className="competitor-analysis-section">
      <div className="section-header">
        <h2 className="section-title cursor-hover-target">Competitor Analysis Comparison Chart</h2>
        <p className="section-subtitle">
          How MoonPay Everyday stacks up against the competition across key features and capabilities.
        </p>
      </div>
      
      <div className="table-container">
        <table className="competitor-table">
          <thead>
            <tr>
              <th className="header-cell competitor-header">
                <div className="header-content">
                  <span>COMPETITOR</span>
                </div>
              </th>
              <th className="header-cell">
                <div className="header-content">
                  <span>FIAT ON/OFF RAMP STRENGTH</span>
                </div>
              </th>
              <th className="header-cell">
                <div className="header-content">
                  <span>NON-CUSTODIAL DEPTH</span>
                </div>
              </th>
              <th className="header-cell">
                <div className="header-content">
                  <span>EVERYDAY UTILITY</span>
                </div>
              </th>
              <th className="header-cell">
                <div className="header-content">
                  <span>SIMPLICITY & UX</span>
                </div>
              </th>
              <th className="header-cell">
                <div className="header-content">
                  <span>ECOSYSTEM SCOPE</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor, index) => (
              <tr 
                key={competitor.name} 
                className={`table-row ${competitor.name === 'MoonPay Everyday' ? 'our-product' : ''}`}
              >
                <td className="competitor-name">{competitor.name}</td>
                <td className={`strength-cell ${getStrengthColor(competitor.fiat_on_off_ramp)}`}>
                  {competitor.fiat_on_off_ramp}
                </td>
                <td className={`strength-cell ${getStrengthColor(competitor.non_custodial_depth)}`}>
                  {competitor.non_custodial_depth}
                </td>
                <td className={`strength-cell ${getStrengthColor(competitor.everyday_utility)}`}>
                  {competitor.everyday_utility}
                </td>
                <td className={`strength-cell ${getStrengthColor(competitor.simplicity_ux)}`}>
                  {competitor.simplicity_ux}
                </td>
                <td className={`strength-cell ${getStrengthColor(competitor.ecosystem_scope)}`}>
                  {competitor.ecosystem_scope}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
