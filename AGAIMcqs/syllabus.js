const SYLLABUS_MODULES = [
  {
    "id": "mod1",
    "num": 1,
    "title": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "lectures": "Lectures 24-25 & 32-33",
    "desc": "Foundational attention mechanism: Query, Key, Value routing, Softmax normalization, and 1/\u221ad_k variance scaling.",
    "topics": [
      "Why Scaled Dot-Product Uses the 1/\u221ad_k Normalizing Factor",
      "Role of Softmax in Converting Attention Scores to Probability Weights",
      "Value Vector Aggregation via Attention Weights",
      "Linear Projections for Query (Q), Key (K), and Value (V)",
      "Quadratic Computational Complexity O(N\u00b2) in Self-Attention"
    ],
    "q_ids": [
      "q1",
      "q2",
      "q3",
      "q4",
      "q11"
    ]
  },
  {
    "id": "mod2",
    "num": 2,
    "title": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "lectures": "Lecture 26",
    "desc": "Running multiple attention heads in parallel to capture distinct linguistic and semantic relationships simultaneously.",
    "topics": [
      "Concatenation of Multiple Attention Heads & Output Linear Projection",
      "Per-Head Feature Dimension Calculation (d_k = d_model / h)"
    ],
    "q_ids": [
      "q5",
      "q12"
    ]
  },
  {
    "id": "mod3",
    "num": 3,
    "title": "Module 3: Transformer Architecture Deep-Dive",
    "lectures": "Lectures 27-28",
    "desc": "Internal mechanics: LayerNorm, Residual Skip Connections, Position-wise Feed-Forward Networks, Cross-Attention, and Causal/Padding Masks.",
    "topics": [
      "Purpose of Padding Mask (Ignoring Non-Content Padding Tokens)",
      "Bidirectional Context Awareness in Standard Transformer Encoders",
      "Residual (Skip) Connections & Feature Dimension Matching",
      "Position-Wise Feed-Forward Network (FFN) Operation",
      "Cross-Attention Score Matrix Dimensions (Decoder Queries \u00d7 Encoder Keys)",
      "Cross-Attention Source Routing (Keys and Values from Encoder)",
      "Layer Normalization (LayerNorm) for Activation Stability",
      "Residual Connection as an Uninterrupted Gradient Highway",
      "Causal (Autoregressive) Self-Attention Masking",
      "Parallel Training with Triangular Causal Masks (Teacher Forcing)",
      "Pre-Softmax Logit Masking using Large Negative Values (-\u221e)",
      "Token Independence in the Position-Wise Feed-Forward Sublayer"
    ],
    "q_ids": [
      "q6",
      "q7",
      "q8",
      "q10",
      "q13",
      "q14",
      "q15",
      "q16",
      "q17",
      "q18",
      "q19",
      "q20"
    ]
  },
  {
    "id": "mod4",
    "num": 4,
    "title": "Module 4: Positional Encoding & Sequence Modeling",
    "lectures": "Lectures 29-30",
    "desc": "Injecting word order and 2D spatial coordinates into permutation-equivariant attention blocks.",
    "topics": [
      "Why Self-Attention Requires Positional Information (Permutation Equivariance)",
      "2D Spatial Coordinate Representation in Vision Transformers"
    ],
    "q_ids": [
      "q9",
      "q32"
    ]
  },
  {
    "id": "mod5",
    "num": 5,
    "title": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "lectures": "Lecture 31",
    "desc": "Applying Transformers to images: Patch extraction, linear projection, [CLS] classification tokens, and global receptive fields.",
    "topics": [
      "Image Patch Partitioning Formula (16\u00d716 Patches on 224\u00d7224 Image)",
      "Encoder Sequence Length with the Added [CLS] Classification Token",
      "Image Patch Partitioning with Larger Patches (32\u00d732 Patches)",
      "Effect of Halving Patch Size on Total Token Count (Inverse Quadratic Law)",
      "Flattened Patch Dimensionality Calculation (Height \u00d7 Width \u00d7 Channels = 768)",
      "Role of Linear Patch Projection in Mapping Pixels to Transformer Hidden Space",
      "Total Number of Positional Embeddings Required (N patches + 1 [CLS])",
      "Nature and Initialization of the Learned [CLS] Token",
      "Global Receptive Field in Vision Transformers vs Local CNN Filters",
      "Effect of Doubling Image Resolution on Patch Token Count",
      "Computational Bottleneck of Small Patches and Shifted Windows (Swin)",
      "Primary Function of Linear Patch Projection",
      "Independence of Patch Count from Transformer Hidden Size"
    ],
    "q_ids": [
      "q21",
      "q22",
      "q23",
      "q24",
      "q25",
      "q26",
      "q27",
      "q28",
      "q29",
      "q30",
      "q31",
      "q33",
      "q34"
    ]
  },
  {
    "id": "mod6",
    "num": 6,
    "title": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "lectures": "Lectures 33-35",
    "desc": "Decoder-only LLMs (GPT): Next-token prediction, shifted targets, token embeddings, and sampling methods (Temperature, Top-k, Top-p).",
    "topics": [
      "Autoregressive Probability Factorization (Chain Rule of Next-Token Prediction)",
      "Shifted Target Alignment in Next-Token Training",
      "Autoregressive Generation Loop & KV Caching",
      "Temperature Scaling for Controlling Randomness vs Determinism",
      "Top-k Sampling (Restricting to the k Most Likely Tokens)",
      "Top-p (Nucleus) Dynamic Cumulative Probability Sampling",
      "End-of-Sequence (EOS) Token for Natural Generation Termination",
      "Context Window Boundary & Handling History Overflow",
      "Token ID to Continuous Vector Embedding Lookup",
      "Decoder-Only Architecture Characteristics (Absence of Cross-Attention)",
      "The Two-Stage Paradigm: Self-Supervised Pre-training followed by Fine-Tuning"
    ],
    "q_ids": [
      "q35",
      "q36",
      "q37",
      "q38",
      "q39",
      "q40",
      "q41",
      "q42",
      "q43",
      "q44",
      "q45"
    ]
  },
  {
    "id": "mod7",
    "num": 7,
    "title": "Module 7: Prompt Engineering Fundamentals",
    "lectures": "Lectures 35-37",
    "desc": "Steering LLMs effectively: Zero-Shot, Few-Shot In-Context Learning, Roles, XML Delimiters, JSON constraints, and Meta-Prompting.",
    "topics": [
      "Explicit Formatting & Column Constraints for Predictable Output",
      "Delimiters for Clean Separation of Instructions from User Data",
      "Zero-Shot Prompting (Direct Task Instruction Without Examples)",
      "Iterative Prompt Refinement (Conversational Feedback Loops)",
      "Few-Shot In-Context Learning (Demonstrating Input-Output Patterns)",
      "Context Grounding & Prompt Enrichment for Domain Accuracy",
      "Role & Persona Prompting (System Level Guidance)",
      "Prompt Templates & Parameterization for Software Reusability",
      "Ambiguity Reduction via Structured Outputs (JSON Schema)",
      "Enforcing Length & Concrete Boundary Constraints",
      "Meta-Prompting (Prompting an LLM to Design and Optimize Prompts)"
    ],
    "q_ids": [
      "q46",
      "q47",
      "q48",
      "q49",
      "q50",
      "q51",
      "q52",
      "q53",
      "q54",
      "q55",
      "q56"
    ]
  },
  {
    "id": "mod8",
    "num": 8,
    "title": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "lectures": "Lectures 36-37",
    "desc": "Adapting foundation models: Freezing base weights, Low-Rank Decomposition (\u0394W = B\u00b7A), rank-r math, multi-adapters, and weight merging.",
    "topics": [
      "PEFT vs Full Fine-Tuning (Why We Train <1% Parameters)",
      "Base Model Weight Freezing in LoRA to Save GPU VRAM",
      "Low-Rank Matrix Decomposition (\u0394W = B \u00b7 A)",
      "Linear Parameter Scaling with Rank r (Params = r \u00d7 (d_in + d_out))",
      "Exact LoRA Parameter Calculation (4096\u00d74096 Layer at Rank 8)",
      "Exact LoRA Parameter Calculation (1024\u00d71024 Layer at Rank 4)",
      "Effect of Doubling Rank r on Trainable Adapter Parameters",
      "Multi-Adapter Serving & Storage Efficiency on a Shared Base Model",
      "Weight Merging for Zero Inference Latency Overhead"
    ],
    "q_ids": [
      "q57",
      "q58",
      "q59",
      "q60",
      "q61",
      "q62",
      "q63",
      "q64",
      "q65"
    ]
  }
];
