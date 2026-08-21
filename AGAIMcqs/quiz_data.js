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

const MODULE_GUIDES = {
  "mod1": {
    "id": "mod1",
    "num": 1,
    "title": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "lectures": "Lectures 24-25 & 32-33",
    "why_study": "Before 2017, all state-of-the-art Natural Language Processing relied on Recurrent Neural Networks (RNNs) and LSTMs. RNNs processed text sequentially, word-by-word (word 1 -> word 2 -> word 3). This had two fatal flaws: (1) Sequential bottleneck: RNNs could not be parallelized across GPU cores, making training on massive internet text impossibly slow. (2) Vanishing memory: By the time an RNN reached word 100 of a paragraph, it completely forgot the context of word 1. Self-Attention solved this forever by allowing the neural network to process every word in a sequence simultaneously and connect any two words regardless of distance in a single step.",
    "what_is_it": "Self-Attention is a mathematical mechanism that allows each word in a sentence to dynamically 'look at' and gather information from all other words in the same sentence.\n\n\ud83e\udde0 The YouTube Search Engine Analogy:\nImagine you are searching for a video on YouTube:\n\u2022 Query (Q): The search term you type into the search bar (e.g., 'how to bake sourdough bread'). This represents what the current word is looking for.\n\u2022 Key (K): The video titles, tags, and descriptions of every video in the database. This represents what each word in the sentence offers.\n\u2022 Value (V): The actual video footage and audio content you watch. This represents the underlying semantic information of the word.\n\nHow it works: YouTube compares your Query against all Keys using a dot product (similarity score). The videos with the highest match scores receive the highest attention weights (via Softmax). Finally, you receive a weighted blend of the Values.",
    "real_world_use": "\u2022 Pronoun Disambiguation: In the sentence 'The animal didn't cross the street because it was too tired', self-attention calculates a high score between 'it' and 'animal' (rather than 'street'), allowing ChatGPT to correctly understand who was tired.\n\u2022 Polysemy Resolution: In 'Apple launched the new iPhone' vs 'He ate a red apple', self-attention connects 'Apple' with 'iPhone' and 'launched' to know it refers to the tech company, not the fruit.\n\u2022 Multimodal Cross-Attention: In models like Midjourney and DALL-E, text queries attend to image visual features to generate art from prompts.",
    "core_mechanics": [
      "1. Linear Projections: Input vector X (N \u00d7 d_model) is multiplied by three learned matrices: Q = X \u00b7 W_Q, K = X \u00b7 W_K, V = X \u00b7 W_V.",
      "2. Raw Similarity Dot Product: Compute the matrix multiplication Q \u00b7 K\u1d40. For sequence length N, this creates an (N \u00d7 N) score matrix containing the pairwise similarity between every token pair (i, j).",
      "3. Scaling Normalization (1/\u221ad_k): Dot products grow proportionally with the key dimension d_k (variance = d_k). Dividing by \u221ad_k pulls the variance back to 1.0. For d_k = 64, we divide by \u221a64 = 8.",
      "4. Softmax Normalization: Softmax is applied row-wise: \u03b1_i = exp(s_i) / \u03a3 exp(s_j). This guarantees all attention weights are positive numbers between 0.0 and 1.0, summing to exactly 1.0 (100%).",
      "5. Value Aggregation: Multiply attention weights by Value matrix: Output = Softmax((Q \u00b7 K\u1d40) / \u221ad_k) \u00b7 V.",
      "6. Computational Complexity: Full self-attention requires O(N\u00b2) time and memory because computing the (N \u00d7 N) score matrix compares all N tokens to all N tokens."
    ],
    "step_by_step_example": "Numerical Walkthrough with Concrete Dimensions:\n\u2022 Input: Batch B = 1, Sequence Length N = 4 words, Model Dimension d_model = 512, Head Dimension d_k = 64.\n\u2022 Q tensor shape: (4 \u00d7 64), K tensor shape: (4 \u00d7 64), V tensor shape: (4 \u00d7 64).\n\u2022 Dot product Q \u00b7 K\u1d40: (4 \u00d7 64) \u00d7 (64 \u00d7 4) = (4 \u00d7 4) matrix of 16 raw scalar scores.\n\u2022 Scaling: Every score is divided by \u221a64 = 8.\n\u2022 Softmax: Applied across each row, producing 4 rows of probabilities where each row sums to 1.0.\n\u2022 Output: (4 \u00d7 4) weights \u00d7 (4 \u00d7 64) Values = (4 \u00d7 64) output tensor.",
    "expected_exam_questions": [
      "Q1: Why is the dot product divided by \u221ad_k in scaled dot-product attention?\n-> Answer: As d_k grows large, dot products grow in magnitude, pushing Softmax into saturated regions with near-zero gradients (vanishing gradients). Dividing by \u221ad_k stabilizes variance to 1.0.",
      "Q2: What is the computational and memory complexity of self-attention with respect to sequence length N?\n-> Answer: O(N\u00b2) quadratic complexity, because every token attends to every other token.",
      "Q3: What mathematical property ensures that attention weights act as a valid probability distribution?\n-> Answer: The Softmax function, which ensures all weights are non-negative and sum to exactly 1.0.",
      "Q4: If sequence length N increases from 1,000 to 3,000 tokens (3x), how does attention score matrix memory change?\n-> Answer: Increases by 3\u00b2 = 9x (quadratic scaling)."
    ],
    "diagram_html": "<div class=\"visual-diagram-box\">\n      <div class=\"visual-diagram-title\">\ud83d\udcca Scaled Dot-Product Attention Architecture Flowchart</div>\n      <div class=\"diagram-flow-flex\">\n        <div class=\"diagram-node node-input\">Input Tokens X<br><small>(N \u00d7 d_model)</small></div>\n        <div class=\"diagram-arrow\">\u2193 Projections</div>\n        <div class=\"diagram-branch-row\">\n          <div class=\"diagram-node node-q\">Query Q<br><small>(N \u00d7 d_k)</small></div>\n          <div class=\"diagram-node node-k\">Key K<br><small>(N \u00d7 d_k)</small></div>\n          <div class=\"diagram-node node-v\">Value V<br><small>(N \u00d7 d_v)</small></div>\n        </div>\n        <div class=\"diagram-arrow\">\u2193 Dot Product (Q \u00b7 K\u1d40)</div>\n        <div class=\"diagram-node node-matrix\">Score Matrix (N \u00d7 N)<br><small>Pairwise Word Similarities</small></div>\n        <div class=\"diagram-arrow\">\u2193 Divide by \u221ad_k (e.g. \u00f7 8)</div>\n        <div class=\"diagram-node node-scale\">Scaled Scores<br><small>Prevents Softmax Saturation</small></div>\n        <div class=\"diagram-arrow\">\u2193 Softmax (Row-wise)</div>\n        <div class=\"diagram-node node-softmax\">Attention Weights \u03b1<br><small>Probabilities Sum to 1.0 (100%)</small></div>\n        <div class=\"diagram-arrow\">\u2193 Multiply with Values (\u03b1 \u00b7 V)</div>\n        <div class=\"diagram-node node-output\">Context-Enriched Output<br><small>(N \u00d7 d_v)</small></div>\n      </div>\n    </div>"
  },
  "mod2": {
    "id": "mod2",
    "num": 2,
    "title": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "lectures": "Lecture 26",
    "why_study": "A single attention mechanism can only compute a single weighted average for each word. But human language is complex: a single word has syntactic dependencies (subject-verb agreement), semantic associations (synonyms), and coreference links (pronouns). Multi-Head Attention (MHA) gives the Transformer the ability to run multiple independent attention mechanisms in parallel, allowing the model to focus on different aspects of the text simultaneously.",
    "what_is_it": "Multi-Head Attention splits the model hidden dimension d_model into 'h' distinct parallel attention heads.\n\n\ud83e\udde0 The Boardroom Committee Analogy:\nImagine a committee of experts reviewing a contract:\n\u2022 Expert 1 (Head 1) specializes in Legal Compliance (checks clauses and rules).\n\u2022 Expert 2 (Head 2) specializes in Financial Figures (checks budgets and numbers).\n\u2022 Expert 3 (Head 3) specializes in Timelines (checks dates and deadlines).\n\nEach expert analyzes the exact same document simultaneously through their own specialized lens. At the end, their reports are placed side-by-side (concatenation) and synthesized into a final verdict by an executive manager (the Output Projection Matrix W_O).",
    "real_world_use": "\u2022 Syntax and Grammar Tracking: Lower heads in GPT-4 and BERT specialize in finding nouns and adjectives, while middle heads specialize in long-distance coreference (linking 'the CEO' to 'she').\n\u2022 Multi-Modal Fusion: In vision-language models, separate heads attend to image patches, text queries, and bounding box coordinates concurrently.",
    "core_mechanics": [
      "1. Dimension Partitioning: The total hidden dimension d_model is evenly divided among h heads: d_k = d_v = d_model / h.",
      "2. Parallel Head Projections: For head i (from 1 to h), Query Q_i = X \u00b7 W_Q^i, Key K_i = X \u00b7 W_K^i, Value V_i = X \u00b7 W_V^i.",
      "3. Independent Attention Computation: head_i = Softmax((Q_i \u00b7 K_i\u1d40) / \u221ad_k) \u00b7 V_i.",
      "4. Concatenation: All h head outputs (each of dimension d_v) are concatenated side-by-side along the last axis: Concat(head\u2081, head\u2082, ..., head_h) has shape (N \u00d7 (h \u00b7 d_v)) = (N \u00d7 d_model).",
      "5. Final Output Projection: Multiplied by matrix W_O of shape (d_model \u00d7 d_model) to blend the multi-head insights: MHA = Concat(...) \u00b7 W_O.",
      "6. Compute Efficiency: Because d_k = d_model / h, the total computational cost of h parallel heads is identical to a single full-dimensional attention head!"
    ],
    "step_by_step_example": "Industry Architecture Parameters:\n\u2022 BERT-Base: d_model = 768, h = 12 heads ==> d_k = 768 / 12 = 64.\n\u2022 GPT-2 Large: d_model = 1024, h = 16 heads ==> d_k = 1024 / 16 = 64.\n\u2022 LLaMA-2 70B: d_model = 8192, h = 64 heads ==> d_k = 8192 / 64 = 128.\n\u2022 Concatenation Math: 12 heads \u00d7 64 dimensions = 768 dimensions.",
    "expected_exam_questions": [
      "Q1: A Transformer has d_model = 768 and 12 attention heads. What is the dimension d_k of each head?\n-> Answer: 64 (since 768 / 12 = 64).",
      "Q2: What operation is performed on individual attention head outputs before passing to the output projection matrix W_O?\n-> Answer: Concatenation (joining their vectors side-by-side).",
      "Q3: Why does multi-head attention not increase computational cost over single-head attention with dimension d_model?\n-> Answer: Because the dimension of each head is scaled down to d_k = d_model / h, so the total FLOPs remain constant."
    ],
    "diagram_html": "<div class=\"visual-diagram-box\">\n      <div class=\"visual-diagram-title\">\ud83d\udcca Multi-Head Attention (MHA) Parallel Processing Visual</div>\n      <div class=\"diagram-flow-flex\">\n        <div class=\"diagram-node node-input\">Input Tensor X (d_model = 768)</div>\n        <div class=\"diagram-arrow\">\u2193 Parallel Projections into h = 12 Heads (d_k = 64 each)</div>\n        <div class=\"diagram-branch-row\" style=\"flex-wrap: wrap;\">\n          <div class=\"diagram-node node-head\">Head 1 (64)<br><small>Pronouns</small></div>\n          <div class=\"diagram-node node-head\">Head 2 (64)<br><small>Verbs</small></div>\n          <div class=\"diagram-node node-head\">Head 3 (64)<br><small>Adjectives</small></div>\n          <div class=\"diagram-node node-head\">... Head 12 (64)<br><small>Grammar</small></div>\n        </div>\n        <div class=\"diagram-arrow\">\u2193 Concatenation along Feature Axis (12 \u00d7 64 = 768)</div>\n        <div class=\"diagram-node node-matrix\">Concatenated Tensor<br><small>Shape: (N \u00d7 768)</small></div>\n        <div class=\"diagram-arrow\">\u2193 Output Linear Projection Matrix W_O (768 \u00d7 768)</div>\n        <div class=\"diagram-node node-output\">Final Multi-Head Output (N \u00d7 768)</div>\n      </div>\n    </div>"
  },
  "mod3": {
    "id": "mod3",
    "num": 3,
    "title": "Module 3: Transformer Architecture Deep-Dive",
    "lectures": "Lectures 27-28",
    "why_study": "Stacking 50 to 100 attention layers directly on top of each other causes deep neural networks to fail due to exploding/vanishing gradients and internal covariate shift. The Transformer architecture solves this by wrapping every attention and feed-forward sublayer inside Residual Skip Connections and Layer Normalization.",
    "what_is_it": "A complete Transformer block consists of two primary sublayers:\n1. Multi-Head Attention (inter-token communication / word mixing)\n2. Position-Wise Feed-Forward Network (intra-token processing / factual memory)\n\nWrapped with:\n\u2022 Residual Skip Connections: y = x + Sublayer(x)\n\u2022 Layer Normalization (LayerNorm): Normalizes feature channels per token.\n\u2022 Causal and Padding Masks: Enforcing autoregressive rules and ignoring filler tokens.",
    "real_world_use": "\u2022 Cross-Attention in Machine Translation: The decoder queries the French source sentence outputs from the encoder to generate the English translation.\n\u2022 Causal Generation in ChatGPT: Causal masks ensure GPT generates text strictly left-to-right without looking ahead into the future.\n\u2022 RMSNorm in LLaMA: Modern open-weights models replace LayerNorm with RMSNorm (Root Mean Square Normalization) to achieve 15% faster training.",
    "core_mechanics": [
      "1. Residual Connections: Creates an uninterrupted gradient highway: \u2202Loss/\u2202x_l = (\u2202Loss/\u2202x_{l+1}) \u00b7 (I + \u2202F/\u2202x_l). The constant identity term +1 prevents vanishing gradients.",
      "2. LayerNorm: Normalizes across feature dimensions (d_model) independently for each token: LN(x) = [(x - \u03bc) / \u221a(\u03c3\u00b2 + \u03b5)] \u00b7 \u03b3 + \u03b2.",
      "3. Position-Wise FFN: Standard two-layer MLP applied to each token independently: FFN(x) = max(0, x\u00b7W\u2081 + b\u2081)\u00b7W\u2082 + b\u2082. Typically expands dimension by 4x (d_ff = 4\u00b7d_model = 2048 for d_model = 512). Holds ~66% of layer parameters.",
      "4. Padding Mask: Adds -\u221e to attention logits for [PAD] tokens prior to Softmax so e^(-\u221e) = 0, giving them 0.0% attention weight.",
      "5. Causal Mask: Lower-triangular matrix that blocks positions j > i, allowing tokens to attend only to past and current positions (j <= i).",
      "6. Cross-Attention: Decoder produces Queries Q = X_dec \u00b7 W_Q; Encoder outputs provide Keys K = X_enc \u00b7 W_K and Values V = X_enc \u00b7 W_V. Score matrix shape = (N_dec \u00d7 N_enc)."
    ],
    "step_by_step_example": "Cross-Attention Dimension Walkthrough:\n\u2022 French input length = 50 tokens (Encoder output shape: 50 \u00d7 d_model).\n\u2022 English output generated so far = 20 tokens (Decoder query shape: 20 \u00d7 d_model).\n\u2022 Cross-Attention Score Matrix Shape: (20 Decoder Queries \u00d7 50 Encoder Keys) = 20 \u00d7 50 matrix.\n\u2022 Softmax is computed along the 50 columns, so each English word distributes 100% of its attention across the 50 French words.",
    "expected_exam_questions": [
      "Q1: What is the shape of the cross-attention matrix for 20 decoder queries and 50 encoder keys?\n-> Answer: 20 \u00d7 50 (Decoder Length \u00d7 Encoder Length).",
      "Q2: Where do Keys and Values come from in encoder-decoder cross-attention?\n-> Answer: The Encoder output.",
      "Q3: What value is added to disallowed or padding attention positions before Softmax?\n-> Answer: -\u221e (or a very large negative value like -1e9), making their Softmax probability zero.",
      "Q4: Which sublayer changes features within each token independently without mixing across positions?\n-> Answer: Position-Wise Feed-Forward Network (FFN)."
    ],
    "diagram_html": "<div class=\"visual-diagram-box\">\n      <div class=\"visual-diagram-title\">\ud83d\udcca Complete Transformer Encoder Layer Block Diagram</div>\n      <div class=\"diagram-flow-flex\">\n        <div class=\"diagram-node node-input\">Input Token Vector x</div>\n        <div class=\"diagram-arrow\">\u2193 Split: Identity Skip Highway + Sublayer</div>\n        <div class=\"diagram-subblock\">\n          <div class=\"diagram-node node-norm\">1. Layer Normalization (LayerNorm)</div>\n          <div class=\"diagram-arrow\">\u2193</div>\n          <div class=\"diagram-node node-q\">2. Multi-Head Self-Attention (MHA)</div>\n          <div class=\"diagram-arrow\">\u2193 Add Residual Highway</div>\n          <div class=\"diagram-node node-output\">Residual Addition: x + MHA(LayerNorm(x))</div>\n        </div>\n        <div class=\"diagram-arrow\">\u2193 Next Sublayer</div>\n        <div class=\"diagram-subblock\">\n          <div class=\"diagram-node node-norm\">3. Layer Normalization (LayerNorm)</div>\n          <div class=\"diagram-arrow\">\u2193</div>\n          <div class=\"diagram-node node-v\">4. Position-Wise FFN (4x Expansion: 512 \u2192 2048 \u2192 512)</div>\n          <div class=\"diagram-arrow\">\u2193 Add Residual Highway</div>\n          <div class=\"diagram-node node-output\">Residual Addition: x + FFN(LayerNorm(x))</div>\n        </div>\n        <div class=\"diagram-arrow\">\u2193</div>\n        <div class=\"diagram-node node-softmax\">Output to Next Transformer Layer</div>\n      </div>\n    </div>"
  },
  "mod4": {
    "id": "mod4",
    "num": 4,
    "title": "Module 4: Positional Encoding & Sequence Modeling",
    "lectures": "Lectures 29-30",
    "why_study": "Self-attention is mathematically permutation-equivariant: if you shuffle the input words of a sentence into a random order, the output vectors are the exact same vectors simply shuffled into that same random order! Language and images depend completely on order and spatial structure. Without positional information, 'not good, very bad' looks identical to 'not bad, very good'.",
    "what_is_it": "Positional Encoding (PE) is a technique that injects sequence order (1st, 2nd, 3rd word) or 2D image coordinates (x, y grid) into the word embeddings before the first Transformer layer.\n\n\ud83e\udde0 The Numbered Index Cards Analogy:\nImagine you drop a 500-page book on the floor and the pages scatter everywhere. If the pages have page numbers printed on them (Positional Encodings), you can instantly reconstruct the exact story. Without page numbers, you just have an unordered pile of words.",
    "real_world_use": "\u2022 Rotary Position Embeddings (RoPE): Used in LLaMA-3, Mistral, and Gemma. Encodes relative distances by rotating Query and Key vectors in the complex plane.\n\u2022 Vision Transformers (ViT): Adds 1D/2D learned positional vectors to image patches so the model understands spatial geometry (top-left vs bottom-right).\n\u2022 Long-Context Scaling (YaRN & NTK-RoPE): Allows models to expand from 4k to 128k context windows by interpolating positional frequencies.",
    "core_mechanics": [
      "1. Permutation Equivariance: Attention is order-agnostic by default and requires explicit positional signals.",
      "2. Sinusoidal Fixed Embeddings (Original Transformer): PE(pos, 2i) = sin(pos / 10000^(2i/d)), PE(pos, 2i+1) = cos(pos / 10000^(2i/d)). Enables model to learn relative position offsets via trigonometric identity.",
      "3. Learned Absolute Embeddings (BERT / ViT): A learnable parameter table of shape (Max_Length \u00d7 d_model). Looked up by index and added element-wise: X = Token_Embeddings + Positional_Embeddings.",
      "4. 2D Spatial Positional Embeddings: In ViT, learned positional vectors are added to patch tokens plus the [CLS] token: shape ((N+1) \u00d7 d_model).",
      "5. Bicubic Interpolation: When fine-tuning ViT on higher resolution images (e.g. 224\u00d7224 -> 384\u00d7384), the 2D positional grid is interpolated to fit the new patch count."
    ],
    "step_by_step_example": "ViT Positional Embedding Math:\n\u2022 Image: 224 \u00d7 224, Patch Size: 16 \u00d7 16 ==> N = 14 \u00d7 14 = 196 patch tokens.\n\u2022 Prepend 1 [CLS] token at index 0 ==> Sequence Length = 196 + 1 = 197 tokens.\n\u2022 Positional Embedding Table Shape: Exactly (197 \u00d7 d_model).\n\u2022 Input to Layer 1 = [CLS_Token, Patch_1, ..., Patch_196] + Positional_Table.",
    "expected_exam_questions": [
      "Q1: Why do Transformers require positional encodings in addition to token embeddings?\n-> Answer: Because self-attention alone is permutation-equivariant and does not encode word order.",
      "Q2: What happens if a Vision Transformer receives image patches without positional embeddings?\n-> Answer: The model cannot determine which patch content occurred at which spatial image location.",
      "Q3: How many positional embeddings are needed for a ViT with 196 patches and one CLS token?\n-> Answer: 197 (196 patches + 1 CLS token)."
    ],
    "diagram_html": "<div class=\"visual-diagram-box\">\n      <div class=\"visual-diagram-title\">\ud83d\udcca Positional Encoding Vector Injection Visual</div>\n      <div class=\"diagram-flow-flex\">\n        <div class=\"diagram-branch-row\">\n          <div class=\"diagram-node node-input\" style=\"flex:1;\">Word Token Embedding E_t<br><small>Represents meaning (e.g. 'Dog')</small></div>\n          <div style=\"font-size:24px; font-weight:bold; color:#2563eb; display:grid; place-items:center;\">+</div>\n          <div class=\"diagram-node node-q\" style=\"flex:1;\">Positional Vector PE_t<br><small>Represents position (e.g. Position #1)</small></div>\n        </div>\n        <div class=\"diagram-arrow\">\u2193 Element-Wise Addition (Shape: 1 \u00d7 d_model)</div>\n        <div class=\"diagram-node node-output\">Order-Aware Token Representation X_t = E_t + PE_t<br><small>Carries both semantic meaning AND exact sequence order</small></div>\n      </div>\n    </div>"
  },
  "mod5": {
    "id": "mod5",
    "num": 5,
    "title": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "lectures": "Lecture 31",
    "why_study": "Convolutional Neural Networks (CNNs) ruled computer vision from 2012 to 2020 because their 3\u00d73 sliding filters naturally match 2D pixels (inductive bias). However, CNN filters can only see local neighbor pixels\u2014connecting the top-left corner of an image to the bottom-right corner required stacking dozens of deep layers. Vision Transformers (ViT) eliminated this limitation by providing an immediate global receptive field in Layer 1 using self-attention across image patches.",
    "what_is_it": "Vision Transformer (ViT) treats an image like a sentence of words.\n\n\ud83e\udde0 The Photo Puzzle Analogy:\n1. Cut a photo into 196 square puzzle pieces (16 \u00d7 16 pixel patches).\n2. Unroll each square patch into a list of 768 RGB color numbers (Flattening).\n3. Project the numbers into a clean token vector (Linear Patch Projection).\n4. Add a blank [CLS] summary card at the front (Classification Token).\n5. Number each piece from 1 to 197 (Positional Embeddings).\n6. Feed the pieces through standard Transformer encoder layers!",
    "real_world_use": "\u2022 Medical Diagnostics: High-accuracy detection of tumors in MRI and CT scans.\n\u2022 Autonomous Driving: Tesla Vision and Waymo use Vision Transformers to identify pedestrians and vehicles across surround cameras.\n\u2022 Multimodal AI: ViT is the visual backbone for CLIP, GPT-4o, and Google Gemini.",
    "core_mechanics": [
      "1. Patch Partitioning Formula: N = (H \u00d7 W) / P\u00b2. For a 224 \u00d7 224 image with 16 \u00d7 16 patches: N = (224/16)\u00b2 = 14 \u00d7 14 = 196 patches.",
      "2. Flattened Patch Vector Size: P \u00d7 P \u00d7 Channels = 16 \u00d7 16 \u00d7 3 = 768 scalar pixel values.",
      "3. Linear Patch Projection: Multiplies flattened 768-pixel vector by projection matrix E to map to d_model: nn.Conv2d(in=3, out=d_model, kernel=16, stride=16).",
      "4. [CLS] Token: A learned dummy vector prepended at index 0. Sequence length becomes N + 1 = 197. Its final layer output is fed to the MLP classification head.",
      "5. Patch Scaling Law (Inverse Quadratic): Halving patch size P (16 -> 8) quadruples token count (4x) and increases attention compute by 16x (4\u00b2 = 16).",
      "6. Resolution Scaling: Doubling image resolution (224 -> 448) quadruples token count (196 -> 784, 4x).",
      "7. Swin Transformer: Solves quadratic complexity on high-res images by computing attention inside local shifted windows with linear O(N) complexity."
    ],
    "step_by_step_example": "Calculations Summary:\n\u2022 224 \u00d7 224 with 16 \u00d7 16 patches ==> (224/16)\u00b2 = 14\u00b2 = 196 patches.\n\u2022 224 \u00d7 224 with 32 \u00d7 32 patches ==> (224/32)\u00b2 = 7\u00b2 = 49 patches.\n\u2022 256 \u00d7 256 with 16 \u00d7 16 patches ==> (256/16)\u00b2 = 16\u00b2 = 256 patches.\n\u2022 Total Sequence Length with [CLS] token = 196 + 1 = 197 tokens.\n\u2022 Flattened RGB 16\u00d716 vector = 16 \u00d7 16 \u00d7 3 = 768 numbers.",
    "expected_exam_questions": [
      "Q1: A 224 \u00d7 224 image is split into 16 \u00d7 16 patches. How many image patches are produced?\n-> Answer: 196 patches (14 \u00d7 14 = 196).",
      "Q2: How many scalar pixel values are in a flattened 16 \u00d7 16 RGB patch?\n-> Answer: 768 (16 \u00d7 16 \u00d7 3 = 768).",
      "Q3: What is the sequence length after prepending the CLS token for 196 patches?\n-> Answer: 197 (196 + 1 = 197).",
      "Q4: If patch size changes from 16\u00d716 to 8\u00d78 at fixed image resolution, by what factor does token count change?\n-> Answer: It becomes 4 times larger (inverse quadratic scaling).",
      "Q5: Which Vision Transformer architecture uses local shifted windows to achieve linear complexity O(N)?\n-> Answer: Swin Transformer."
    ],
    "diagram_html": "<div class=\"visual-diagram-box\">\n      <div class=\"visual-diagram-title\">\ud83d\udcca Vision Transformer (ViT) Complete End-to-End Pipeline</div>\n      <div class=\"diagram-flow-flex\">\n        <div class=\"diagram-node node-input\">1. 2D Input Image (224 \u00d7 224 RGB)</div>\n        <div class=\"diagram-arrow\">\u2193 Sliced into 16 \u00d7 16 Non-Overlapping Patches</div>\n        <div class=\"diagram-node node-matrix\">2. 196 Visual Patches (14 \u00d7 14 Grid)<br><small>Each patch = 16 \u00d7 16 \u00d7 3 = 768 pixel numbers</small></div>\n        <div class=\"diagram-arrow\">\u2193 Linear Patch Projection Matrix E (Conv2d 16\u00d716)</div>\n        <div class=\"diagram-node node-q\">3. 196 Patch Token Embeddings (d_model = 768)</div>\n        <div class=\"diagram-arrow\">\u2193 Prepend [CLS] Token at Index 0 (Length becomes 197)</div>\n        <div class=\"diagram-node node-v\">4. [CLS] Token + 196 Patch Tokens</div>\n        <div class=\"diagram-arrow\">\u2193 Add 197 Learned Positional Embeddings</div>\n        <div class=\"diagram-node node-scale\">5. 197 Position-Aware Tokens into Transformer Encoder</div>\n        <div class=\"diagram-arrow\">\u2193 12 Transformer Encoder Layers</div>\n        <div class=\"diagram-node node-softmax\">6. Extract Final [CLS] Token Output Vector</div>\n        <div class=\"diagram-arrow\">\u2193 MLP Classification Head</div>\n        <div class=\"diagram-node node-output\">7. Predicted Class (e.g., 'Golden Retriever: 98.4%')</div>\n      </div>\n    </div>"
  },
  "mod6": {
    "id": "mod6",
    "num": 6,
    "title": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "lectures": "Lectures 33-35",
    "why_study": "Generative Large Language Models (LLMs) like GPT-4, Claude, and LLaMA are built on the simple yet profound objective of next-token prediction. Understanding how raw text is tokenized, embedded, passed through causal decoders, and sampled gives you complete insight into how modern AI generates human-like responses.",
    "what_is_it": "An Autoregressive Decoder-Only LLM predicts one token at a time conditioned on all preceding tokens.\n\n\ud83e\udde0 The Phone Predictive Keyboard Analogy:\nWhen typing on your smartphone keyboard, the system suggests the next 3 words based on what you already typed. An LLM does this on a massive scale across a 50,000-word vocabulary, scoring each word's probability and picking the best continuation.",
    "real_world_use": "\u2022 Chatbots & Conversational AI (ChatGPT, Gemini, Claude).\n\u2022 Code Generation & Autocomplete (GitHub Copilot, Cursor, CodeLlama).\n\u2022 KV Caching: Caching past Key and Value vectors in GPU memory allows LLMs to generate text 20x faster during inference.",
    "core_mechanics": [
      "1. Autoregressive Factorization: P(x\u2081...x_T) = \u03a0 P(x_t | x_<t). By the probability chain rule, joint sequence probability is the product of next-token probabilities.",
      "2. Shifted Targets: During training, inputs are tokens [1 : T-1] and targets are shifted by +1 to tokens [2 : T]. Context ending at w_t predicts w_{t+1}.",
      "3. Decoder-Only Stack: No Encoder and NO Cross-Attention! Only Masked Causal Self-Attention and Position-Wise FFN.",
      "4. Temperature (T): Scales logits before Softmax: P(i) = exp(z_i / T) / \u03a3 exp(z_j / T). Low T (<0.3) = sharp, deterministic (coding/math). High T (>0.8) = flat, creative, diverse.",
      "5. Top-k Sampling: Retains only the k highest-probability candidates (e.g. k = 50) and discards low-probability tail noise.",
      "6. Top-p (Nucleus) Sampling: Dynamically chooses the smallest candidate set whose cumulative probability mass reaches threshold p (e.g. p = 0.90).",
      "7. End-of-Sequence [EOS]: Special token that halts the generation loop cleanly."
    ],
    "step_by_step_example": "Training vs Inference Comparison:\n\u2022 Training (Teacher Forcing): The full 4,000-word text is processed in parallel on the GPU in a single matrix operation using a triangular causal mask.\n\u2022 Inference (Generation Loop): Generation is sequential (token-by-token). Step 1: Prompt -> predict word 1. Step 2: [Prompt + word 1] -> predict word 2. Step 3: Loop until [EOS] token is generated.",
    "expected_exam_questions": [
      "Q1: In causal LM training on [w\u2081, w\u2082, w\u2083, w\u2084], which target is paired with context ending at w\u2082?\n-> Answer: w\u2083 (shifted by +1).",
      "Q2: What is the effect of lowering sampling temperature T?\n-> Answer: The probability distribution becomes sharper and more peaked toward high-probability tokens (more deterministic).",
      "Q3: How does Top-p (nucleus) sampling select its candidate pool?\n-> Answer: Retains the smallest set of most probable tokens whose cumulative probability reaches threshold p.",
      "Q4: Which attention sublayer is absent from a decoder-only GPT model?\n-> Answer: Encoder-decoder cross-attention.",
      "Q5: What signals the model to stop generating tokens?\n-> Answer: An End-of-Sequence (EOS) token or reaching the max_tokens limit."
    ],
    "diagram_html": "<div class=\"visual-diagram-box\">\n      <div class=\"visual-diagram-title\">\ud83d\udcca LLM Autoregressive Generation & Sampling Loop</div>\n      <div class=\"diagram-flow-flex\">\n        <div class=\"diagram-node node-input\">Input Prompt: \"The capital of France is\"</div>\n        <div class=\"diagram-arrow\">\u2193 Tokenization & Causal Decoder Forward Pass (with KV Cache)</div>\n        <div class=\"diagram-node node-matrix\">Raw Vocabulary Logits (50,000 candidate words)</div>\n        <div class=\"diagram-arrow\">\u2193 Temperature Scaling: Logits \u00f7 T</div>\n        <div class=\"diagram-node node-scale\">Temperature Scaled Distribution<br><small>Low T (<0.3) = Focused/Deterministic | High T (>0.8) = Creative</small></div>\n        <div class=\"diagram-arrow\">\u2193 Top-k & Top-p (Nucleus) Truncation Filters</div>\n        <div class=\"diagram-node node-softmax\">Clean Candidate Pool (Top 90% Probability Mass)</div>\n        <div class=\"diagram-arrow\">\u2193 Sample Next Token</div>\n        <div class=\"diagram-node node-output\">Sampled Token: \"Paris\"</div>\n        <div class=\"diagram-arrow\">\u2193 Check: Is Token == [EOS] ?</div>\n        <div class=\"diagram-branch-row\">\n          <div class=\"diagram-node node-q\" style=\"flex:1;\">No: Append \"Paris\" to prompt and repeat loop \u21bb</div>\n          <div class=\"diagram-node node-norm\" style=\"flex:1;\">Yes: Terminate generation and display answer \ud83c\udfc1</div>\n        </div>\n      </div>\n    </div>"
  },
  "mod7": {
    "id": "mod7",
    "num": 7,
    "title": "Module 7: Prompt Engineering Fundamentals",
    "lectures": "Lectures 35-37",
    "why_study": "Foundation models are general-purpose knowledge engines. Without precise instructions, they produce conversational fluff, hallucinate, or fail strict output formatting requirements. Prompt Engineering is the software engineering discipline of guiding pre-trained LLMs to execute tasks accurately, securely, and reliably without updating model weights.",
    "what_is_it": "Prompt Engineering utilizes in-context learning, delimiters, system roles, and structured schemas to steer LLM behavior.\n\n\ud83e\udde0 The New Employee Onboarding Analogy:\nIf you hire a brilliant new employee and simply say 'do work', they will be confused. If you give them: (1) A clear job title (Role Prompting), (2) The reference documents (Context Grounding), (3) 3 solved example reports (Few-Shot Prompting), and (4) The exact spreadsheet template (Structured JSON Schema), they will perform the task with 100% precision.",
    "real_world_use": "\u2022 Production APIs: Enforcing Pydantic JSON schemas for automated database insertion.\n\u2022 Security & Prompt Injection Defense: Using XML tags (<review>...</review>) to prevent malicious user inputs from overriding system instructions.\n\u2022 Meta-Prompting & DSPy: Automated compilation and optimization of prompts using AI.",
    "core_mechanics": [
      "1. Zero-Shot Prompting: Providing direct task instructions with 0 demonstration examples. Saves prompt token cost.",
      "2. Few-Shot Prompting (In-Context Learning): Providing 2 to 5 solved example input-output pairs in the prompt. Enables model to mimic exact style and edge-case handling without weight updates.",
      "3. Delimiters (\"\"\", ```, <tags>): Clearly quarantines developer instructions from untrusted user data, preventing prompt injection attacks.",
      "4. Role Prompting: Telling the model 'Act as a Senior Database Administrator' primes domain vocabulary and professional perspective.",
      "5. Structured Outputs (JSON Schema): Restricting output to valid JSON with explicit keys eliminates ambiguity for downstream software.",
      "6. Prompt Templates: Parameterized strings with {placeholders} allowing reusable, version-controlled prompt pipelines in LangChain and LlamaIndex.",
      "7. Meta-Prompting: Prompting an LLM to design, optimize, or evaluate prompts for other tasks."
    ],
    "step_by_step_example": "Production Prompt Architecture Template:\n1. System Message: 'You are a principal security engineer auditing Python code.' (Role)\n2. Delimiters: 'Analyze ONLY the code enclosed inside <code> tags.'\n3. Input Data: '<code>{user_code}</code>'\n4. Few-Shot Example: [Example code -> Expected JSON vulnerability report]\n5. Strict Output Constraint: 'Output strictly valid JSON matching schema: {vulnerabilities: list, severity: string}. Do NOT include conversational preamble.'",
    "expected_exam_questions": [
      "Q1: Why are delimiters like XML tags or triple quotes useful in prompts?\n-> Answer: They clearly separate system instructions from input data to be processed, preventing ambiguity and prompt injection.",
      "Q2: How does few-shot in-context learning differ from fine-tuning?\n-> Answer: Few-shot updates zero model weights and operates entirely during inference inside the prompt context.",
      "Q3: What prompt design enables software reuse of prompts with dynamic customer data?\n-> Answer: A prompt template with variable placeholders (e.g. {customer_name}).",
      "Q4: Which technique involves asking an LLM to generate or optimize prompts for downstream tasks?\n-> Answer: Meta-Prompting."
    ],
    "diagram_html": "<div class=\"visual-diagram-box\">\n      <div class=\"visual-diagram-title\">\ud83d\udcca Production Prompt Engineering Architecture Stack</div>\n      <div class=\"diagram-flow-flex\">\n        <div class=\"diagram-node node-q\">1. System Role / Persona<br><small>\"You are a senior cybersecurity architect.\"</small></div>\n        <div class=\"diagram-arrow\">\u2193</div>\n        <div class=\"diagram-node node-v\">2. XML Delimiters (Quarantine User Data)<br><small>&lt;code_to_audit&gt; ... &lt;/code_to_audit&gt;</small></div>\n        <div class=\"diagram-arrow\">\u2193</div>\n        <div class=\"diagram-node node-scale\">3. Domain Context Grounding (RAG)<br><small>Private company security policies & API documentation</small></div>\n        <div class=\"diagram-arrow\">\u2193</div>\n        <div class=\"diagram-node node-matrix\">4. Few-Shot Demonstration Pairs<br><small>Example Input 1 \u2192 Expected Output 1 | Example Input 2 \u2192 Expected Output 2</small></div>\n        <div class=\"diagram-arrow\">\u2193</div>\n        <div class=\"diagram-node node-softmax\">5. Target Query & Strict Output Schema<br><small>\"Output strictly valid JSON matching schema: {status: str, bugs: list}\"</small></div>\n        <div class=\"diagram-arrow\">\u2193 Passed to Pre-Trained Foundation Model</div>\n        <div class=\"diagram-node node-output\">Deterministic, Reliable & Secure Enterprise Output</div>\n      </div>\n    </div>"
  },
  "mod8": {
    "id": "mod8",
    "num": 8,
    "title": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "lectures": "Lectures 36-37",
    "why_study": "Pre-trained base LLMs have general knowledge, but enterprise applications require domain expertise (medical, legal, coding) and strict alignment. Full fine-tuning (updating 100% of parameters) is prohibitively expensive, requires massive GPU clusters (560+ GB VRAM for Adam states), and risks catastrophic forgetting. PEFT (Parameter-Efficient Fine-Tuning) and LoRA revolutionized the field by enabling fine-tuning of <1% of parameters on a single GPU!",
    "what_is_it": "LoRA (Low-Rank Adaptation) freezes the pre-trained model weights W\u2080 and attaches two small, trainable low-rank matrices (A and B) to each layer: \u0394W = B \u00b7 A.\n\n\ud83e\udde0 The Giant Encyclopedia & Sticky Notes Analogy:\nImagine you own a massive 10,000-page Encyclopedia (a 70B parameter base LLM). Full fine-tuning means erasing and rewriting the entire 10,000 pages every time you want to learn a new task. LoRA leaves the encyclopedia 100% frozen and untouched, and simply sticks small, high-density sticky notes (<1% size) on relevant pages. You can easily peel off or swap the sticky notes anytime!",
    "real_world_use": "\u2022 Multi-Adapter Serving (vLLM / S-LoRA): A company loads one shared 70B base model (140 GB) into GPU memory once, and dynamically hot-swaps 100 different 20 MB LoRA adapters for Finance, Legal, Customer Support, and Code.\n\u2022 Weight Merging for Zero Latency: When deploying a single adapter to production, W_merged = W\u2080 + (\u03b1/r)\u00b7BA fuses the weights permanently, resulting in exactly 0 extra inference latency.",
    "core_mechanics": [
      "1. Base Model Freezing: Pre-trained weight matrix W\u2080 (d_out \u00d7 d_in) is frozen (requires_grad = False). Eliminates 8 bytes of Adam optimizer memory per parameter.",
      "2. Low-Rank Decomposition: \u0394W = B \u00b7 A. Matrix A has shape (r \u00d7 d_in) initialized with Gaussian noise. Matrix B has shape (d_out \u00d7 r) initialized to zeros (so \u0394W = 0 at step 0).",
      "3. Linear Parameter Scaling: Adapter parameters = r \u00b7 d_in + d_out \u00b7 r = r(d_in + d_out). Parameter count scales strictly linearly with rank r.",
      "4. Forward Pass with Scaling: Output h = W\u2080 x + (\u03b1 / r) \u00b7 (B \u00b7 A) x. The constant \u03b1/r keeps updates stable when experimenting with different ranks.",
      "5. Exact Calculation (4096 \u00d7 4096, r = 8): 8 \u00d7 4096 + 4096 \u00d7 8 = 32,768 + 32,768 = 65,536 parameters (<0.39% of 16.7M base weights).",
      "6. Exact Calculation (1024 \u00d7 1024, r = 4): 4 \u00d7 1024 + 1024 \u00d7 4 = 4,096 + 4,096 = 8,192 parameters.",
      "7. Rank Doubling: Doubling rank r from 8 to 16 exactly doubles the adapter parameter count (2x).",
      "8. Zero Latency Merging: W_merged = W\u2080 + (\u03b1/r)\u00b7BA fuses adapter into base weights, allowing standard single-matrix multiplication during inference."
    ],
    "step_by_step_example": "LoRA vs Full Fine-Tuning Storage Comparison:\n\u2022 Base 70B Model Size: 140 GB on disk.\n\u2022 Full Fine-Tuning 5 Tasks: 5 \u00d7 140 GB = 700 GB disk storage, requires 5 separate GPU servers.\n\u2022 LoRA Multi-Adapter 5 Tasks: 1 Shared Base (140 GB) + 5 Adapters (5 \u00d7 30 MB = 150 MB) = 140.15 GB total on a single GPU server!",
    "expected_exam_questions": [
      "Q1: When applying LoRA with base model frozen, which parameters are excluded from optimizer updates?\n-> Answer: The original pre-trained base weight matrices W\u2080.",
      "Q2: A 4096 \u00d7 4096 linear layer is adapted with LoRA rank r = 8. How many trainable adapter parameters are used?\n-> Answer: 65,536 parameters (8 \u00d7 4096 + 4096 \u00d7 8 = 65,536).",
      "Q3: A 1024 \u00d7 1024 weight matrix is adapted with LoRA rank r = 4. How many adapter parameters are trained?\n-> Answer: 8,192 parameters (4 \u00d7 1024 + 1024 \u00d7 4 = 8,192).",
      "Q4: Why is Matrix B initialized to zero in LoRA?\n-> Answer: So that \u0394W = B \u00b7 A = 0 at the start of training, preserving the exact pre-trained base model behavior initially.",
      "Q5: What is one practical deployment effect of merging a trained LoRA adapter into base weights?\n-> Answer: The merged model executes with zero extra inference latency and requires no separate adapter matrix path."
    ],
    "diagram_html": "<div class=\"visual-diagram-box\">\n      <div class=\"visual-diagram-title\">\ud83d\udcca LoRA Low-Rank Decomposition Architecture Visual</div>\n      <div class=\"diagram-flow-flex\">\n        <div class=\"diagram-node node-input\">Input Activation Vector x (Dimension d_in = 4096)</div>\n        <div class=\"diagram-arrow\">\u2193 Dual Parallel Forward Paths</div>\n        <div class=\"diagram-branch-row\">\n          <div class=\"diagram-node node-norm\" style=\"flex: 1.2;\">\n            <b>Path 1: Frozen Base Weights W\u2080</b><br>\n            <small>Shape: (4096 \u00d7 4096) = 16,777,216 params<br>\n            \ud83d\udd12 NO Gradients / NO Optimizer Memory</small><br>\n            <b>Output = W\u2080 \u00b7 x</b>\n          </div>\n          <div style=\"font-size:24px; font-weight:bold; color:#2563eb; display:grid; place-items:center;\">+</div>\n          <div class=\"diagram-node node-q\" style=\"flex: 1.2;\">\n            <b>Path 2: Trainable LoRA Adapter (Rank r = 8)</b><br>\n            <small>Matrix A (8 \u00d7 4096) [Gaussian]<br>\n            Matrix B (4096 \u00d7 8) [Zeros]<br>\n            \u2728 Only 65,536 trainable params (&lt;0.39%)</small><br>\n            <b>Output = (\u03b1 / r) \u00b7 (B \u00b7 A) \u00b7 x</b>\n          </div>\n        </div>\n        <div class=\"diagram-arrow\">\u2193 Element-Wise Addition</div>\n        <div class=\"diagram-node node-output\">\n          <b>Combined Output: h = W\u2080 x + (\u03b1 / r) (B \u00b7 A) x</b><br>\n          <small>\u26a1 Deployment: Weights fused into W_merged with 0% latency overhead!</small>\n        </div>\n      </div>\n    </div>"
  }
};

const QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Why Scaled Dot-Product Uses the 1/\u221ad_k Normalizing Factor",
    "difficulty": "Medium",
    "points": 1,
    "question": "Why is the Query-Key dot product divided by \u221ad_k in scaled dot-product attention?",
    "options": [
      "To make every attention head use identical weights",
      "To keep attention scores from growing too large as key dimension increases",
      "To convert value vectors into probability distributions",
      "To remove the need for positional information"
    ],
    "correct": "To keep attention scores from growing too large as key dimension increases",
    "explanation": "Without scaling, dot-product magnitudes tend to grow with the key dimension, which can push softmax into saturated regions with very small gradients.",
    "theory": {
      "title": "Scaling Factor (1/\u221ad_k) in Attention",
      "what_is_it": "In Transformers, words look at other words by calculating the dot product between a Query vector (what word A is searching for) and a Key vector (what word B represents). The value d_k is the length (dimension) of these vectors (for example, d_k = 64). The term 1/\u221ad_k is a simple normalizing divider.",
      "why_we_need_it": "When you multiply two long vectors together, their dot product grows very large as the vector dimension d_k increases. When huge numbers enter the Softmax function, Softmax saturates\u2014it turns one output into 1.0 and all others to 0.0. In this flat region, the gradient becomes almost zero (the vanishing gradient problem), which completely freezes the model from learning during training!",
      "how_it_works": "Assuming Query (q) and Key (k) vector components are independent random variables with mean 0 and variance 1, their dot product q \u00b7 k = q\u2081k\u2081 + q\u2082k\u2082 + ... + q_k k_k has a variance of d_k and standard deviation of \u221ad_k. Dividing by \u221ad_k pulls the variance back to 1.0, ensuring stable gradients regardless of how large d_k is.",
      "formula": "Attention(Q, K, V) = Softmax( (Q \u00b7 K\u1d40) / \u221ad_k ) \u00b7 V",
      "key_takeaways": [
        "Without scaling: Dot products grow proportional to \u221ad_k.",
        "Large dot products cause Softmax saturation and vanishing gradients.",
        "Dividing by \u221ad_k stabilizes the variance to 1.0, enabling smooth gradient backpropagation."
      ]
    },
    "sample_questions": [
      {
        "q": "If key dimension d_k = 64, what is the exact numerical scaling factor applied to Q \u00b7 K\u1d40?",
        "options": [
          "1/16",
          "1/64",
          "1/32",
          "1/8 (since \u221a64 = 8)"
        ],
        "ans": "1/8 (since \u221a64 = 8)",
        "exp": "The divisor is \u221ad_k = \u221a64 = 8, so the multiplier is 1/8 = 0.125."
      },
      {
        "q": "What training failure happens if we omit \u221ad_k when d_k is large?",
        "options": [
          "Matrix dimension mismatch",
          "Loss of positional awareness",
          "Softmax saturation causing vanishing gradients",
          "Exploding activations in layer norm"
        ],
        "ans": "Softmax saturation causing vanishing gradients",
        "exp": "Large inputs push softmax outputs into extreme tails where the slope (derivative) is almost zero."
      }
    ]
  },
  {
    "id": "q2",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Role of Softmax in Converting Attention Scores to Probability Weights",
    "difficulty": "Easy",
    "points": 1,
    "question": "After attention scores are computed for a query, what is the main role of softmax?",
    "options": [
      "Convert the scores into normalized attention weights",
      "Project the query into the model vocabulary",
      "Create a positional index for each token",
      "Freeze the key and value projections"
    ],
    "correct": "Convert the scores into normalized attention weights",
    "explanation": "Softmax transforms the attention scores into non-negative weights whose values sum to 1 across the attended positions.",
    "theory": {
      "title": "Softmax Function in Self-Attention",
      "what_is_it": "Softmax is an activation function that takes any list of raw real numbers (positive, negative, or zero) and turns them into a smooth percentage distribution where every number is between 0 and 1, and the entire sum equals exactly 1.0 (100%).",
      "why_we_need_it": "The dot product between Query and Key produces arbitrary raw scores (like +4.5, -2.1, +0.3). To blend information across words, we need to know what fraction of attention each word deserves. Softmax gives us these normalized percentage weights.",
      "how_it_works": "Softmax exponentiates each score (e^z) so negative numbers become positive, then divides each by the sum of all exponentials: \u03b1_i = exp(s_i) / \u03a3 exp(s_j). Because Softmax is smooth and differentiable, the neural network can learn which words to pay attention to via gradient descent.",
      "formula": "\u03b1_i = exp(s_i) / \u03a3 exp(s_j), where sum of all \u03b1_i = 1.0",
      "key_takeaways": [
        "Transforms raw similarity scores into valid probability weights summing to 1.0.",
        "Ensures non-negative weights (0.0 to 1.0) for every token position.",
        "Differentiable 'soft lookup' mechanism enabling backpropagation."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the mathematical sum of the attention weights assigned by one query across all tokens in a sequence?",
        "options": [
          "Depends on sequence length N",
          "Zero",
          "Equal to d_model",
          "Always exactly 1.0 (100%)"
        ],
        "ans": "Always exactly 1.0 (100%)",
        "exp": "Softmax normalizes the row so all probabilities sum to 1.0."
      },
      {
        "q": "Why is Softmax used instead of hard argmax (picking the single highest score)?",
        "options": [
          "Softmax uses less memory",
          "Softmax deletes low-scoring tokens",
          "Softmax is differentiable allowing backpropagation, while argmax has zero gradient",
          "Softmax creates word tokens"
        ],
        "ans": "Softmax is differentiable allowing backpropagation, while argmax has zero gradient",
        "exp": "Differentiability is required for gradient descent to update weights."
      }
    ]
  },
  {
    "id": "q3",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Value Vector Aggregation via Attention Weights",
    "difficulty": "Easy",
    "points": 1,
    "question": "Once attention weights have been obtained, which vectors are combined using those weights to form the attention output?",
    "options": [
      "Value vectors",
      "Query vectors",
      "Positional vectors",
      "Token-ID vectors"
    ],
    "correct": "Value vectors",
    "explanation": "Attention uses the normalized Query-Key scores as weights for a weighted combination of the Value vectors.",
    "theory": {
      "title": "Query (Q), Key (K), and Value (V) Roles",
      "what_is_it": "Think of Attention like searching on YouTube: your search bar text is the Query (Q), video titles and tags are the Keys (K), and the actual video content you watch is the Value (V). Once the system figures out which videos match your query (the weights), it blends the Values together.",
      "why_we_need_it": "Queries and Keys are only used to calculate the match scores. The actual meaningful semantic content to be carried forward into the next layer lives inside the Value (V) vectors.",
      "how_it_works": "The model multiplies each token's Value vector V_j by its attention weight \u03b1_j and sums them up: Output = \u03a3 (\u03b1_j \u00b7 V_j) = Softmax( (Q \u00b7 K\u1d40) / \u221ad_k ) \u00b7 V.",
      "formula": "Output = \u03b1\u2081V\u2081 + \u03b1\u2082V\u2082 + ... + \u03b1_N V_N = AttentionWeights \u00b7 V",
      "key_takeaways": [
        "Query (Q) = What am I searching for?",
        "Key (K) = What do I contain to match searches?",
        "Value (V) = The actual content being retrieved and blended.",
        "Output = Weighted sum of Value vectors."
      ]
    },
    "sample_questions": [
      {
        "q": "If word 1 has weight 0.8 and Value vector V\u2081, and word 2 has weight 0.2 and Value vector V\u2082, what is the output vector?",
        "options": [
          "V\u2081 + V\u2082",
          "0.8 Q\u2081 + 0.2 K\u2082",
          "max(V\u2081, V\u2082)",
          "0.8 V\u2081 + 0.2 V\u2082"
        ],
        "ans": "0.8 V\u2081 + 0.2 V\u2082",
        "exp": "Attention output is the linear combination \u03a3 \u03b1_i V_i."
      },
      {
        "q": "In the search engine analogy, what does the Value vector represent?",
        "options": [
          "The search bar query",
          "The internet speed",
          "The database index key",
          "The actual content/data returned to the user"
        ],
        "ans": "The actual content/data returned to the user",
        "exp": "The Value is the content retrieved proportional to the Query-Key similarity."
      }
    ]
  },
  {
    "id": "q4",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Linear Projections for Query (Q), Key (K), and Value (V)",
    "difficulty": "Easy",
    "points": 1,
    "question": "In self-attention, how are Query, Key, and Value representations usually produced from a token's hidden state?",
    "options": [
      "Using three independent tokenizers",
      "Using one shared scalar multiplier only",
      "Using three fixed sinusoidal functions",
      "Using separate learned linear projections"
    ],
    "correct": "Using separate learned linear projections",
    "explanation": "The hidden states are multiplied by learned projection matrices to produce Query, Key, and Value representations.",
    "theory": {
      "title": "Projection Matrices (W_Q, W_K, W_V)",
      "what_is_it": "A 'linear projection' is just a standard weight matrix multiplication (X \u00b7 W). For each input word vector X, the network multiplies it by three different learned weight matrices (W_Q, W_K, W_V) to create three specialized vectors: Q, K, and V.",
      "why_we_need_it": "A raw word vector contains general information. By projecting it through three separate matrices, the model allows the same word to act as a seeker (Q), a reference (K), and a content-provider (V) in distinct feature spaces.",
      "how_it_works": "Given input matrix X with shape (Sequence Length N \u00d7 Hidden Dimension d_model): Q = X \u00b7 W_Q, K = X \u00b7 W_K, V = X \u00b7 W_V. The projection matrices W_Q, W_K, W_V are learned during training.",
      "formula": "Q = X \u00b7 W_Q, K = X \u00b7 W_K, V = X \u00b7 W_V",
      "key_takeaways": [
        "Three separate learned projection matrices are used: W_Q, W_K, W_V.",
        "Allows asymmetric attention (word A can look at word B without forcing word B to look at word A).",
        "Matrices are trained end-to-end via gradient descent."
      ]
    },
    "sample_questions": [
      {
        "q": "If input X has shape (Batch B, Length N, Dimension 512) and projection matrix W_Q has shape (512, 64), what is the shape of Query tensor Q?",
        "options": [
          "(B, 64, 512)",
          "(B, N, 512)",
          "(B, N, 64)",
          "(N, N, 64)"
        ],
        "ans": "(B, N, 64)",
        "exp": "Multiplying (B, N, 512) \u00d7 (512, 64) produces (B, N, 64)."
      },
      {
        "q": "Why don't we just compute attention directly on raw input X without W_Q, W_K, W_V?",
        "options": [
          "It would be too fast",
          "Input tokens cannot be multiplied",
          "Without projections, attention would be symmetric and unable to learn specialized roles for queries vs keys",
          "It would cause zero division"
        ],
        "ans": "Without projections, attention would be symmetric and unable to learn specialized roles for queries vs keys",
        "exp": "Separate matrices give the network the expressiveness to model asymmetric directional relationships."
      }
    ]
  },
  {
    "id": "q11",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Quadratic Computational Complexity O(N\u00b2) in Self-Attention",
    "difficulty": "Medium",
    "points": 2,
    "question": "If the sequence length doubles while hidden dimensions stay fixed, how does the size of a full self-attention score matrix change?",
    "options": [
      "It remains unchanged",
      "It becomes eight times as large",
      "It becomes twice as large",
      "It becomes four times as large"
    ],
    "correct": "It becomes four times as large",
    "explanation": "A full self-attention score matrix has N \u00d7 N entries. Doubling N changes N\u00b2 to (2N)\u00b2 = 4N\u00b2.",
    "theory": {
      "title": "Quadratic Complexity O(N\u00b2) in Self-Attention",
      "what_is_it": "Self-attention compares every single word in a sentence to every other word in that sentence. If you have N words, this comparison forms an N \u00d7 N matrix of attention scores.",
      "why_we_need_it": "Understanding complexity is crucial for understanding why LLMs have context window limits! If sequence length N grows, the attention matrix size grows quadratically (N\u00b2).",
      "how_it_works": "The matrix multiplication Q \u00b7 K\u1d40 takes (N \u00d7 d_k) \u00d7 (d_k \u00d7 N) = (N \u00d7 N). If N is doubled to 2N, the total number of cells in the matrix becomes (2N) \u00d7 (2N) = 4N\u00b2 (4 times larger!).",
      "formula": "Attention Score Matrix Size = N \u00d7 N = N\u00b2 ==> (2N)\u00b2 = 4N\u00b2",
      "key_takeaways": [
        "Full self-attention has O(N\u00b2) memory and compute complexity.",
        "Doubling sequence length (2x) quadruples memory and FLOPs (4x).",
        "Tripling sequence length (3x) increases memory by 9x."
      ]
    },
    "sample_questions": [
      {
        "q": "If context window increases from 1,000 to 4,000 tokens (4x), by what factor does the attention score matrix grow?",
        "options": [
          "16 times (since 4\u00b2 = 16)",
          "8 times",
          "4 times",
          "64 times"
        ],
        "ans": "16 times (since 4\u00b2 = 16)",
        "exp": "Quadratic growth: (4)\u00b2 = 16x."
      },
      {
        "q": "Which component in a Transformer scales linearly O(N) with sequence length rather than quadratically O(N\u00b2)?",
        "options": [
          "Attention Softmax",
          "Causal mask matrix",
          "Position-wise Feed-Forward Network (FFN)",
          "Query-Key dot product"
        ],
        "ans": "Position-wise Feed-Forward Network (FFN)",
        "exp": "FFN processes each token position independently, so its compute scales as O(N)."
      }
    ]
  },
  {
    "id": "q5",
    "module_id": "mod2",
    "module_name": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "syllabus_lec": "Lecture 26",
    "topic": "Concatenation of Multiple Attention Heads & Output Linear Projection",
    "difficulty": "Medium",
    "points": 1,
    "question": "What normally happens to the outputs of the individual attention heads in multi-head attention before the next sub-layer?",
    "options": [
      "They are concatenated and passed through an output projection",
      "Only the first head is retained and the rest are discarded",
      "They are averaged into a single scalar for each token",
      "They are converted back into raw token IDs"
    ],
    "correct": "They are concatenated and passed through an output projection",
    "explanation": "Multi-head attention concatenates the head outputs and applies a learned output projection to return to the model hidden dimension.",
    "theory": {
      "title": "Multi-Head Attention (MHA) Fusion",
      "what_is_it": "Instead of computing just one attention mechanism, Multi-Head Attention runs h smaller attention mechanisms ('heads') in parallel. At the end, it places their outputs side-by-side (concatenation) and passes them through a final matrix W_O to merge them.",
      "why_we_need_it": "A single attention head can only focus on one thing at a time (like tracking pronouns). By having 8 or 16 heads, Head 1 can track pronouns, Head 2 can track verbs, Head 3 can track adjectives, and Head 4 can track sentence grammar simultaneously!",
      "how_it_works": "Each head produces an output of dimension d_v. Concatenating h heads produces a tensor of dimension h \u00b7 d_v = d_model. Multiplying by learned matrix W_O with shape (d_model \u00d7 d_model) mixes the insights from all heads back into the main representation.",
      "formula": "MHA(Q, K, V) = Concat(head\u2081, head\u2082, ..., head_h) \u00b7 W_O",
      "key_takeaways": [
        "Heads are computed independently in parallel.",
        "All head outputs are concatenated side-by-side along the feature dimension.",
        "An output projection matrix W_O blends the concatenated heads back to d_model."
      ]
    },
    "sample_questions": [
      {
        "q": "If a model has h = 8 heads and each head produces a 64-dimensional vector, what is the width of the concatenated vector before W_O?",
        "options": [
          "8",
          "64",
          "1024",
          "512 (since 8 \u00d7 64 = 512)"
        ],
        "ans": "512 (since 8 \u00d7 64 = 512)",
        "exp": "Concatenating 8 vectors of size 64 gives 8 \u00d7 64 = 512."
      },
      {
        "q": "What is the primary benefit of having multiple attention heads?",
        "options": [
          "Removes the need for GPUs",
          "Forces left-to-right reading",
          "Reduces parameter count to zero",
          "Allows the model to attend to information from different representation subspaces simultaneously"
        ],
        "ans": "Allows the model to attend to information from different representation subspaces simultaneously",
        "exp": "Each head specializes in learning distinct linguistic and syntactic relationships."
      }
    ]
  },
  {
    "id": "q12",
    "module_id": "mod2",
    "module_name": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "syllabus_lec": "Lecture 26",
    "topic": "Per-Head Feature Dimension Calculation (d_k = d_model / h)",
    "difficulty": "Medium",
    "points": 2,
    "question": "A Transformer has d_model = 768 and 12 equal-sized attention heads. What is the usual dimension of each head?",
    "options": [
      "64",
      "128",
      "32",
      "96"
    ],
    "correct": "64",
    "explanation": "With equal-sized heads, 768 \u00f7 12 = 64 dimensions per head.",
    "theory": {
      "title": "Head Dimension Partitioning Formula",
      "what_is_it": "In standard Transformers, the total model hidden dimension (d_model) is evenly split among all attention heads (h). The dimension of each individual head is called d_k (or d_v).",
      "why_we_need_it": "By splitting d_model across h heads (d_k = d_model / h), the total computational cost of multi-head attention is identical to running a single full-sized attention head, but with vastly richer representational power!",
      "how_it_works": "Formula: d_k = d_model / h. For BERT-Base (d_model = 768, h = 12), d_k = 768 / 12 = 64. For GPT-2 Large (d_model = 1024, h = 16), d_k = 1024 / 16 = 64. For LLaMA-7B (d_model = 4096, h = 32), d_k = 4096 / 32 = 128.",
      "formula": "d_k = d_v = d_model / h",
      "key_takeaways": [
        "Formula: d_k = d_model / h.",
        "Ensures total compute remains constant regardless of head count.",
        "Typical head dimensions in modern models are 64 or 128."
      ]
    },
    "sample_questions": [
      {
        "q": "If a Transformer has d_model = 1024 and 16 heads, what is the dimension d_k of each head?",
        "options": [
          "256",
          "32",
          "64 (since 1024 / 16 = 64)",
          "128"
        ],
        "ans": "64 (since 1024 / 16 = 64)",
        "exp": "d_k = 1024 / 16 = 64."
      },
      {
        "q": "A model has 32 heads and d_k = 128. What is the model hidden dimension d_model?",
        "options": [
          "1024",
          "8192",
          "2048",
          "4096 (since 32 \u00d7 128 = 4096)"
        ],
        "ans": "4096 (since 32 \u00d7 128 = 4096)",
        "exp": "d_model = h \u00d7 d_k = 32 \u00d7 128 = 4096."
      }
    ]
  },
  {
    "id": "q6",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Purpose of Padding Mask (Ignoring Non-Content Padding Tokens)",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the purpose of a padding mask in Transformer attention?",
    "options": [
      "Make the model generate exactly one token",
      "Prevent attention from assigning weight to padded positions",
      "Force every token to attend only to itself",
      "Increase the number of trainable attention heads"
    ],
    "correct": "Prevent attention from assigning weight to padded positions",
    "explanation": "Padding masks mark non-content positions so they do not receive meaningful attention weight.",
    "theory": {
      "title": "Padding Mask in Transformers",
      "what_is_it": "When processing a batch of sentences of different lengths, shorter sentences are padded with dummy [PAD] tokens to make all rows equal length. A Padding Mask is a filter that tells the model: 'These are fake dummy tokens, ignore them completely!'",
      "why_we_need_it": "Without a padding mask, real words would calculate attention scores with the [PAD] tokens, absorbing useless noise and corrupting the word representations.",
      "how_it_works": "Before Softmax is computed, the model adds a huge negative number (-\u221e or -1e9) to every cell corresponding to a [PAD] token. Since e^(-\u221e) = 0, Softmax assigns exactly 0.0% attention weight to all padding positions.",
      "formula": "MaskedScore(i, j) = Score(i, j) if valid token, or -\u221e if [PAD] token",
      "key_takeaways": [
        "Allows variable-length sentences to be trained efficiently in batches.",
        "Sets attention logits for [PAD] tokens to -\u221e before Softmax.",
        "Guarantees that no real token wastes attention on dummy padding."
      ]
    },
    "sample_questions": [
      {
        "q": "What numerical value is added to [PAD] token logits prior to Softmax?",
        "options": [
          "-\u221e (or a very large negative number like -1e9)",
          "0",
          "0.5",
          "+1.0"
        ],
        "ans": "-\u221e (or a very large negative number like -1e9)",
        "exp": "Because e^(-\u221e) = 0, ensuring zero attention probability."
      },
      {
        "q": "What happens if a model forgets to use a padding mask during batch training?",
        "options": [
          "All outputs become positive",
          "Real tokens will attend to dummy [PAD] tokens, corrupting word embeddings",
          "The tokenizer crashes",
          "The model runs twice as fast"
        ],
        "ans": "Real tokens will attend to dummy [PAD] tokens, corrupting word embeddings",
        "exp": "Attention weights would be diluted across meaningless filler tokens."
      }
    ]
  },
  {
    "id": "q7",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Bidirectional Context Awareness in Standard Transformer Encoders",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a standard Transformer encoder without a causal restriction, which tokens may a non-padding token attend to within the same input sequence?",
    "options": [
      "Any non-padding token in the input sequence",
      "Only tokens that occur earlier in the sequence",
      "Only tokens at even-numbered positions",
      "Only the immediately adjacent tokens"
    ],
    "correct": "Any non-padding token in the input sequence",
    "explanation": "Encoder self-attention is typically bidirectional, so each non-padding position can attend to all other non-padding input positions.",
    "theory": {
      "title": "Bidirectional Encoder Self-Attention",
      "what_is_it": "In an Encoder (like BERT), attention is bidirectional (unmasked): every word can look both forward (to the right) and backward (to the left) across the whole sentence simultaneously.",
      "why_we_need_it": "In understanding tasks (like classifying sentiment or extracting entities), you already have the complete sentence available. Looking in both directions provides full contextual clarity (e.g. knowing whether 'bank' means a river bank or a financial bank).",
      "how_it_works": "Every token position i calculates attention weights with all token positions j across the sentence. No causal triangular mask is applied.",
      "formula": "Encoder Attention: \u03b1(i, j) > 0 for all positions i and j in the sequence",
      "key_takeaways": [
        "Encoder attention is bidirectional (full visibility left and right).",
        "Used in understanding/classification models (BERT, RoBERTa, ViT).",
        "Contrast with autoregressive decoders (GPT), which use causal masking."
      ]
    },
    "sample_questions": [
      {
        "q": "Which famous model architecture relies on bidirectional encoder self-attention?",
        "options": [
          "GPT-2",
          "Mistral",
          "LLaMA",
          "BERT"
        ],
        "ans": "BERT",
        "exp": "BERT stands for Bidirectional Encoder Representations from Transformers."
      },
      {
        "q": "Why is bidirectional attention NOT used for next-word text generation in GPT?",
        "options": [
          "It requires 10x more GPU memory",
          "It deletes token embeddings",
          "Because seeing future words during text generation would cause 'cheating' during training",
          "It disables residual connections"
        ],
        "ans": "Because seeing future words during text generation would cause 'cheating' during training",
        "exp": "During autoregressive generation, future words don't exist yet, so attention must be causal (left-to-right)."
      }
    ]
  },
  {
    "id": "q8",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Residual (Skip) Connections & Feature Dimension Matching",
    "difficulty": "Medium",
    "points": 1,
    "question": "For a residual addition x + Sublayer(x) to be performed directly, what must normally match?",
    "options": [
      "The number of training epochs and attention heads",
      "The feature dimensions of the two tensors",
      "The vocabulary size and sequence length",
      "The tokenizer size and batch size"
    ],
    "correct": "The feature dimensions of the two tensors",
    "explanation": "Element-wise residual addition requires compatible tensor shapes, including the same hidden feature dimension.",
    "theory": {
      "title": "Residual (Skip) Connections",
      "what_is_it": "A Residual Connection takes the original input vector x, bypasses the sublayer, and directly adds it to the sublayer output: y = x + Sublayer(x).",
      "why_we_need_it": "In linear algebra, you can only perform element-wise vector addition (a + b) if both vectors have the exact same shape and feature dimension (d_model).",
      "how_it_works": "Both the input tensor x and the sublayer output Sublayer(x) must have shape (Batch B, Length N, Dimension d_model). Adding them together creates an uninterrupted gradient highway back to the first layer.",
      "formula": "y = x + Sublayer(x), where dimension(x) = dimension(Sublayer(x)) = d_model",
      "key_takeaways": [
        "Direct element-wise addition requires identical tensor feature dimensions.",
        "Input dimension and sublayer output dimension must equal d_model.",
        "Prevents vanishing gradients in deep architectures."
      ]
    },
    "sample_questions": [
      {
        "q": "If input x has shape (B, N, 768), what must be the shape of the Attention sublayer output before residual addition?",
        "options": [
          "(N, N)",
          "(B, 768, N)",
          "(B, N, 64)",
          "(B, N, 768)"
        ],
        "ans": "(B, N, 768)",
        "exp": "Element-wise addition requires exactly matching dimensions."
      },
      {
        "q": "What critical training problem do residual connections solve in 100+ layer Transformers?",
        "options": [
          "Vanishing gradients during backpropagation",
          "Tokenization errors",
          "Memory leaks in CPU RAM",
          "Dataset bias"
        ],
        "ans": "Vanishing gradients during backpropagation",
        "exp": "Residual connections allow gradients to flow backwards without repeated attenuation."
      }
    ]
  },
  {
    "id": "q10",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Position-Wise Feed-Forward Network (FFN) Operation",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which statement best describes the position-wise feed-forward network inside a Transformer block?",
    "options": [
      "It changes the tokenizer vocabulary after every layer",
      "It transforms each token representation independently using the same learned network",
      "It computes attention scores between every pair of tokens",
      "It creates the causal mask used by the decoder"
    ],
    "correct": "It transforms each token representation independently using the same learned network",
    "explanation": "The feed-forward sub-layer is applied separately at each sequence position while sharing the same learned weights across positions.",
    "theory": {
      "title": "Position-Wise Feed-Forward Network (FFN)",
      "what_is_it": "Inside every Transformer layer, right after the Attention sublayer, sits a standard two-layer Multi-Layer Perceptron (FFN). It is called position-wise because it operates on each word token independently and in parallel.",
      "why_we_need_it": "Attention is great for routing information between words, but you also need dense layers to process, transform, and store factual knowledge within each word representation.",
      "how_it_works": "The FFN takes vector x_i, projects it up to a wider intermediate dimension (typically 4 \u00d7 d_model, e.g. 512 -> 2048), applies a non-linear activation (ReLU or GELU), and projects it back down to d_model. The exact same weights W\u2081, W\u2082 are applied to every token position.",
      "formula": "FFN(x) = max(0, x \u00b7 W\u2081 + b\u2081) \u00b7 W\u2082 + b\u2082",
      "key_takeaways": [
        "Operates on each token position independently (no token mixing).",
        "Weights are shared across all positions in that layer.",
        "Typically expands dimension by 4x (d_ff = 4 \u00d7 d_model)."
      ]
    },
    "sample_questions": [
      {
        "q": "If d_model = 512, what is the typical inner hidden dimension d_ff of the FFN sublayer?",
        "options": [
          "2048 (since 4 \u00d7 512 = 2048)",
          "1024",
          "256",
          "512"
        ],
        "ans": "2048 (since 4 \u00d7 512 = 2048)",
        "exp": "Standard Transformer uses a 4x expansion factor: 4 \u00d7 512 = 2048."
      },
      {
        "q": "Does the position-wise FFN exchange information between different words in the sequence?",
        "options": [
          "No, it operates on each token independently without cross-token interaction",
          "Only if bidirectional attention is enabled",
          "Yes, through convolution",
          "Yes, by multiplying all token vectors together"
        ],
        "ans": "No, it operates on each token independently without cross-token interaction",
        "exp": "Self-attention mixes words across positions; FFN processes each word independently."
      }
    ]
  },
  {
    "id": "q13",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Cross-Attention Score Matrix Dimensions (Decoder Queries \u00d7 Encoder Keys)",
    "difficulty": "Hard",
    "points": 2,
    "question": "A cross-attention layer has 20 decoder query positions and 50 encoder key positions. Ignoring batch and heads, what is the shape of its attention-score matrix?",
    "options": [
      "50 \u00d7 50",
      "20 \u00d7 20",
      "20 \u00d7 50",
      "50 \u00d7 20"
    ],
    "correct": "20 \u00d7 50",
    "explanation": "Each of the 20 query positions scores each of the 50 key positions, producing a 20 \u00d7 50 matrix.",
    "theory": {
      "title": "Cross-Attention Dimensions",
      "what_is_it": "In Encoder-Decoder models (like translation), Cross-Attention allows the Decoder (which is generating output words) to look back at the input sentence processed by the Encoder.",
      "why_we_need_it": "The input sentence (e.g. 50 French words) and output sentence (e.g. 20 English words) have different lengths! The score matrix tells us how much each output word relates to each input word.",
      "how_it_works": "Queries (Q) come from the Decoder (shape: N_dec \u00d7 d_k). Keys (K) come from the Encoder (shape: N_enc \u00d7 d_k). Multiplying Q \u00b7 K\u1d40 produces an attention matrix of shape N_dec \u00d7 N_enc (20 \u00d7 50).",
      "formula": "Cross-Attention Matrix Shape = N_decoder_queries \u00d7 N_encoder_keys = 20 \u00d7 50",
      "key_takeaways": [
        "Queries (Q) = Decoder tokens (rows).",
        "Keys (K) = Encoder tokens (columns).",
        "Score matrix shape = (Decoder Length \u00d7 Encoder Length)."
      ]
    },
    "sample_questions": [
      {
        "q": "If an English source sentence has 30 tokens and the German translated output has 25 tokens, what is the cross-attention score matrix shape per head?",
        "options": [
          "30 \u00d7 30",
          "30 \u00d7 25",
          "25 \u00d7 25",
          "25 \u00d7 30 (Decoder \u00d7 Encoder)"
        ],
        "ans": "25 \u00d7 30 (Decoder \u00d7 Encoder)",
        "exp": "Shape is N_dec \u00d7 N_enc = 25 \u00d7 30."
      },
      {
        "q": "In cross-attention, along which dimension is Softmax applied?",
        "options": [
          "Along the batch dimension",
          "Along the model dimension",
          "Along the encoder key dimension (columns, summing to 1 for each decoder query)",
          "Along the decoder query dimension (rows)"
        ],
        "ans": "Along the encoder key dimension (columns, summing to 1 for each decoder query)",
        "exp": "For each generated word, the attention weights across all input words sum to 1.0."
      }
    ]
  },
  {
    "id": "q14",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Cross-Attention Source Routing (Keys and Values from Encoder)",
    "difficulty": "Medium",
    "points": 2,
    "question": "In encoder-decoder cross-attention, where do the Value representations normally come from?",
    "options": [
      "The decoder's final vocabulary logits",
      "The tokenizer's merge rules",
      "The encoder output",
      "The positional encoding table only"
    ],
    "correct": "The encoder output",
    "explanation": "Cross-attention uses decoder states to form queries, while keys and values are derived from the encoder output.",
    "theory": {
      "title": "Cross-Attention Routing",
      "what_is_it": "Cross-attention connects two separate neural networks: the Encoder and the Decoder.",
      "why_we_need_it": "The Decoder needs to know what the input sentence means. Therefore, it uses its own state to ask questions (Query), but extracts answers (Keys and Values) directly from the Encoder's memory.",
      "how_it_works": "The Decoder provides Q = X_dec \u00b7 W_Q. The final Encoder representation X_enc is projected into both Keys K = X_enc \u00b7 W_K and Values V = X_enc \u00b7 W_V.",
      "formula": "Q = X_dec \u00b7 W_Q, K = X_enc \u00b7 W_K, V = X_enc \u00b7 W_V",
      "key_takeaways": [
        "Query (Q) comes from the DECODER.",
        "Key (K) and Value (V) come from the ENCODER.",
        "Encoder output is computed once and cached for all decoding steps."
      ]
    },
    "sample_questions": [
      {
        "q": "In a French-to-English translation model, which part of the network provides the Query vectors for cross-attention?",
        "options": [
          "The tokenizer",
          "The English output Decoder",
          "The French input Encoder",
          "The embedding table"
        ],
        "ans": "The English output Decoder",
        "exp": "Decoder generates the queries looking for relevant French source tokens."
      },
      {
        "q": "Are the Encoder Keys and Values recomputed at every auto-regressive decoding step?",
        "options": [
          "Yes, the full Encoder runs again for every single token",
          "Only during fine-tuning",
          "No, the Encoder runs once and its K/V outputs are cached and reused for all decoding steps",
          "Only on even steps"
        ],
        "ans": "No, the Encoder runs once and its K/V outputs are cached and reused for all decoding steps",
        "exp": "The encoder memory is static; only the decoder advances step-by-step."
      }
    ]
  },
  {
    "id": "q15",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Layer Normalization (LayerNorm) for Activation Stability",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which operation is intended to stabilize the scale of hidden activations within a Transformer block rather than mix information between token positions?",
    "options": [
      "Patch projection",
      "Layer normalization",
      "Self-attention",
      "Cross-attention"
    ],
    "correct": "Layer normalization",
    "explanation": "Layer normalization normalizes features within a representation; it does not perform token-to-token information exchange.",
    "theory": {
      "title": "Layer Normalization (LayerNorm)",
      "what_is_it": "Layer Normalization (LayerNorm) is a mathematical layer that stabilizes activations by normalizing all feature values of a single token so they have a mean of 0 and a standard deviation of 1.",
      "why_we_need_it": "In deep networks (e.g. 32 to 96 layers), activations can easily explode or vanish as they pass through repeated matrix multiplications. LayerNorm keeps activations in a healthy, stable numerical range at every layer.",
      "how_it_works": "Unlike Batch Normalization (which normalizes across different sentences in a batch), LayerNorm normalizes across the feature channels (d_model) for each word independently: LayerNorm(x) = [ (x - \u03bc) / \u221a(\u03c3\u00b2 + \u03b5) ] \u00b7 \u03b3 + \u03b2.",
      "formula": "LayerNorm(x) = [ (x - mean) / \u221a(variance + \u03b5) ] \u00b7 \u03b3 + \u03b2",
      "key_takeaways": [
        "Normalizes across the feature dimension (d_model) per token.",
        "Independent of batch size and sequence length.",
        "Stabilizes activation distributions across deep layers."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is LayerNorm preferred over BatchNorm in NLP Transformers?",
        "options": [
          "LayerNorm performs token mixing",
          "BatchNorm cannot run on GPUs",
          "LayerNorm requires zero parameters",
          "BatchNorm depends on fixed batch statistics which fails with variable sequence lengths and small batch sizes"
        ],
        "ans": "BatchNorm depends on fixed batch statistics which fails with variable sequence lengths and small batch sizes",
        "exp": "LayerNorm computes statistics per token, making it independent of batch size."
      },
      {
        "q": "In modern models like LLaMA, what simplification does RMSNorm make to LayerNorm?",
        "options": [
          "Removes the scaling factor \u03b3",
          "Replaces Softmax",
          "Removes the mean-centering step and normalizes purely by the root-mean-square of activations",
          "Normalizes across the batch axis"
        ],
        "ans": "Removes the mean-centering step and normalizes purely by the root-mean-square of activations",
        "exp": "RMSNorm saves computation by omitting mean calculation while maintaining stability."
      }
    ]
  },
  {
    "id": "q16",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Residual Connection as an Uninterrupted Gradient Highway",
    "difficulty": "Medium",
    "points": 2,
    "question": "A deep Transformer must preserve a direct path for earlier representations around a sub-layer. Which connection provides that path?",
    "options": [
      "Padding mask",
      "Vocabulary projection",
      "Residual connection",
      "Positional lookup"
    ],
    "correct": "Residual connection",
    "explanation": "A residual or skip connection adds the sub-layer input to its output, creating a direct information and gradient path.",
    "theory": {
      "title": "Residual Path Integrity",
      "what_is_it": "A Residual (Skip) Connection creates a shortcut path that connects layer l directly to layer l+1: x_{l+1} = x_l + F(x_l).",
      "why_we_need_it": "Without skip connections, gradients passing backwards through 50+ layers get multiplied by weight matrices over and over, rapidly shrinking to zero (vanishing gradient problem). Skip connections create a direct 'highway' for gradients to travel unhindered.",
      "how_it_works": "During backpropagation, the derivative \u2202x_{l+1} / \u2202x_l = 1 + \u2202F / \u2202x_l. The constant term +1 guarantees that gradient signals can flow directly all the way back to the very first layer without diminishing.",
      "formula": "\u2202Loss / \u2202x_l = (\u2202Loss / \u2202x_{l+1}) \u00b7 (Identity + \u2202F / \u2202x_l)",
      "key_takeaways": [
        "Creates a direct identity gradient highway.",
        "Guarantees gradients do not vanish even in 100+ layer deep models.",
        "Allows layers to easily learn identity mappings if needed."
      ]
    },
    "sample_questions": [
      {
        "q": "What identity component in the derivative of x + F(x) ensures gradients do not vanish?",
        "options": [
          "The temperature scalar",
          "The Softmax function",
          "The constant +1 (identity term) in the derivative",
          "The learned positional bias"
        ],
        "ans": "The constant +1 (identity term) in the derivative",
        "exp": "The +1 term passes the gradient backward directly without decay."
      },
      {
        "q": "If a sublayer learns weights such that F(x) \u2248 0, what does the residual block output?",
        "options": [
          "x (the identity mapping of the input)",
          "0",
          "LayerNorm(0)",
          "Undefined"
        ],
        "ans": "x (the identity mapping of the input)",
        "exp": "x + 0 = x, preserving the original signal unchanged."
      }
    ]
  },
  {
    "id": "q17",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Causal (Autoregressive) Self-Attention Masking",
    "difficulty": "Medium",
    "points": 1,
    "question": "Under a causal self-attention mask, which source positions may the token at position t normally attend to?",
    "options": [
      "Only positions after t",
      "All positions without restriction",
      "Position t and positions before t",
      "Only position t + 1"
    ],
    "correct": "Position t and positions before t",
    "explanation": "Causal masking allows a position to use its current and earlier context while blocking future positions.",
    "theory": {
      "title": "Causal Masking (Lower-Triangular Mask)",
      "what_is_it": "In autoregressive text generation (like GPT), a Causal Mask is a triangular filter that blocks every word from seeing any words that appear after it in the sentence.",
      "why_we_need_it": "When generating text word-by-word, future words don't exist yet! When training the model to predict the next word, if it could see future words, it would simply copy-paste them (cheat) instead of learning to predict.",
      "how_it_works": "The attention mask matrix is lower-triangular: position i can attend to position j if and only if j <= i. All positions with j > i (the future) are set to -\u221e before Softmax.",
      "formula": "Causal Mask: Allow position j if j <= i, otherwise set to -\u221e (for future tokens j > i)",
      "key_takeaways": [
        "Restricts attention strictly to past and current tokens (j <= i).",
        "Blocks all future positions (j > i).",
        "Forms a lower-triangular matrix of valid connections."
      ]
    },
    "sample_questions": [
      {
        "q": "In a causal decoder with 4 tokens, which tokens can position 3 attend to?",
        "options": [
          "Tokens 3 and 4",
          "Tokens 1, 2, and 3",
          "All 4 tokens",
          "Only token 3"
        ],
        "ans": "Tokens 1, 2, and 3",
        "exp": "Causal attention permits positions <= 3 (positions 1, 2, and 3)."
      },
      {
        "q": "What visual shape does the causal attention mask have?",
        "options": [
          "A lower-triangular matrix",
          "A full square of ones",
          "An upper-triangular matrix",
          "An identity diagonal line only"
        ],
        "ans": "A lower-triangular matrix",
        "exp": "Valid positions form the lower triangle on and below the main diagonal."
      }
    ]
  },
  {
    "id": "q18",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Parallel Training with Triangular Causal Masks (Teacher Forcing)",
    "difficulty": "Hard",
    "points": 2,
    "question": "Why can causal-language-model training still process many target positions in parallel even though each position is forbidden from seeing future tokens?",
    "options": [
      "Each token is trained in a separate model copy",
      "Future tokens are deleted from the training sequence before every layer",
      "The decoder removes all attention operations during training",
      "A triangular mask enforces the dependency rule inside a parallel matrix computation"
    ],
    "correct": "A triangular mask enforces the dependency rule inside a parallel matrix computation",
    "explanation": "The mask blocks illegal attention links while the score matrices for all positions are still computed together in parallel.",
    "theory": {
      "title": "Parallel Training via Causal Masks",
      "what_is_it": "Before Transformers, Recurrent Neural Networks (RNNs) had to be trained sequentially one word at a time, which was painfully slow. Transformers can train on an entire 4,000-word document in a single parallel GPU matrix operation!",
      "why_we_need_it": "Parallel training on GPUs is what allowed models like GPT-3 and GPT-4 to train on trillions of words in reasonable time.",
      "how_it_works": "The entire training sentence is fed into the GPU at once (Teacher Forcing). The GPU multiplies all Queries with all Keys in one big Q \u00b7 K\u1d40 matrix operation. Then, the triangular causal mask zeroes out future connections after Softmax. Thus, word 1 predicting word 2, word 2 predicting word 3, and word 100 predicting word 101 are all computed simultaneously in parallel!",
      "formula": "Score = Softmax( (Q \u00b7 K\u1d40 / \u221ad_k) + Mask_causal ) \u00b7 V",
      "key_takeaways": [
        "Teacher forcing feeds full ground-truth sequences into the model in parallel.",
        "Triangular mask mathematically prevents future information leakage.",
        "Enables massive parallelization across time steps on GPUs."
      ]
    },
    "sample_questions": [
      {
        "q": "Why were RNNs slower to train on GPUs than masked Transformers?",
        "options": [
          "RNNs had sequential time dependencies (h_t = f(h_{t-1}, x_t)) preventing parallelization across time",
          "RNNs had more parameters",
          "RNNs could not use floating-point numbers",
          "RNNs required causal masking"
        ],
        "ans": "RNNs had sequential time dependencies (h_t = f(h_{t-1}, x_t)) preventing parallelization across time",
        "exp": "RNNs had to wait for step t-1 to finish before computing step t."
      },
      {
        "q": "During text generation (inference), can an LLM generate 100 output words simultaneously in parallel?",
        "options": [
          "Yes, because of the causal mask",
          "Only when temperature is 0",
          "No, inference is autoregressive and generates one token at a time sequentially",
          "Yes, using teacher forcing"
        ],
        "ans": "No, inference is autoregressive and generates one token at a time sequentially",
        "exp": "During inference, future words don't exist yet, so generation proceeds one token per step."
      }
    ]
  },
  {
    "id": "q19",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Pre-Softmax Logit Masking using Large Negative Values (-\u221e)",
    "difficulty": "Medium",
    "points": 2,
    "question": "How are disallowed attention positions commonly handled immediately before softmax?",
    "options": [
      "They are assigned the maximum positive score",
      "They receive a very large negative score so their softmax weight is effectively zero",
      "Their Value vectors are doubled",
      "Their Query vectors are replaced by token IDs"
    ],
    "correct": "They receive a very large negative score so their softmax weight is effectively zero",
    "explanation": "Masked positions are commonly assigned \u2212\u221e or a sufficiently large negative value before softmax, making their resulting probability approximately zero.",
    "theory": {
      "title": "Logit Masking Mechanics",
      "what_is_it": "Logit masking is the mathematical trick used to 'block' positions in attention (both for Padding masks and Causal masks).",
      "why_we_need_it": "You cannot simply delete rows or columns from tensors inside a GPU without breaking tensor shapes and parallel matrix multiplication. Instead, we keep the tensor shape fixed and set forbidden cells to -\u221e.",
      "how_it_works": "The Softmax formula computes e^z. Since e^(-\u221e) = 0, setting the logit to -\u221e (or -1e9) ensures that its resulting Softmax probability is exactly 0.0. In 16-bit precision (FP16), the minimum finite value -65504 is used.",
      "formula": "e^(-\u221e) = 0 ==> Attention Weight for Masked Position = 0.0",
      "key_takeaways": [
        "Forbidden logits are set to -\u221e before Softmax.",
        "Since e^(-\u221e) = 0, the resulting attention weight becomes exactly 0.0.",
        "Preserves fixed GPU tensor shapes without dynamic slicing."
      ]
    },
    "sample_questions": [
      {
        "q": "If a forbidden attention logit was replaced by 0 instead of -\u221e before Softmax, what would happen?",
        "options": [
          "The token receives zero weight",
          "The network crashes with division by zero",
          "The token receives non-zero weight (e^0 = 1), polluting the output",
          "Attention weights sum to 0"
        ],
        "ans": "The token receives non-zero weight (e^0 = 1), polluting the output",
        "exp": "e^0 = 1, which would incorrectly give positive attention probability to the forbidden token."
      },
      {
        "q": "What is the typical FP16 representation of negative infinity used in PyTorch masks?",
        "options": [
          "-1e9",
          "-1.0",
          "-256",
          "-65504 (or torch.finfo(torch.float16).min)"
        ],
        "ans": "-65504 (or torch.finfo(torch.float16).min)",
        "exp": "In FP16, the lowest representable finite number is -65504."
      }
    ]
  },
  {
    "id": "q20",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Token Independence in the Position-Wise Feed-Forward Sublayer",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which Transformer sub-layer changes features within each token but does not directly exchange information between different token positions?",
    "options": [
      "Masked self-attention",
      "Encoder-decoder attention",
      "Multi-head self-attention",
      "Position-wise feed-forward network"
    ],
    "correct": "Position-wise feed-forward network",
    "explanation": "The feed-forward network acts independently on each token position; attention is the sub-layer that mixes information across positions.",
    "theory": {
      "title": "Attention vs Feed-Forward Division of Labor",
      "what_is_it": "Every Transformer block has two main sublayers: 1. Multi-Head Attention and 2. Position-wise Feed-Forward Network (FFN).",
      "why_we_need_it": "They have a clear division of labor: Attention is responsible for inter-token communication (mixing information across different words), while the FFN is responsible for intra-token processing (channel/feature non-linear transformations within each word independently).",
      "how_it_works": "The FFN applies the exact same neural network (W\u2081, b\u2081, W\u2082, b\u2082) to each word token vector x_i separately without any word-to-word cross talk.",
      "formula": "Attention = Word-to-Word Mixing, FFN = Per-Word Feature Processing",
      "key_takeaways": [
        "Attention mixes information across different word positions.",
        "Position-wise FFN acts on each token independently without cross-token interaction.",
        "FFN typically contains ~66% of the layer's total trainable parameters."
      ]
    },
    "sample_questions": [
      {
        "q": "Which sublayer in a Transformer accounts for the majority of trainable parameters (~66%) in that layer?",
        "options": [
          "Multi-Head Attention",
          "Position-wise Feed-Forward Network (FFN)",
          "LayerNorm scale and shift parameters",
          "Positional embeddings"
        ],
        "ans": "Position-wise Feed-Forward Network (FFN)",
        "exp": "Because FFN projects d_model -> 4d_model -> d_model, it holds the bulk of parameters."
      },
      {
        "q": "If you scramble the order of input tokens entering the FFN sublayer, how does each individual token's output change?",
        "options": [
          "Each token output remains completely identical (permutation equivariant)",
          "Outputs become zero",
          "Outputs change drastically",
          "The FFN throws an error"
        ],
        "ans": "Each token output remains completely identical (permutation equivariant)",
        "exp": "Because FFN processes each token in isolation without looking at other tokens."
      }
    ]
  },
  {
    "id": "q9",
    "module_id": "mod4",
    "module_name": "Module 4: Positional Encoding & Sequence Modeling",
    "syllabus_lec": "Lectures 29-30",
    "topic": "Why Self-Attention Requires Positional Information (Permutation Equivariance)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Why does a Transformer need positional information in addition to token content for sequence modelling?",
    "options": [
      "Self-attention alone does not inherently encode token order",
      "Softmax cannot operate on token embeddings",
      "Residual connections erase token identities",
      "Value vectors cannot contain semantic information"
    ],
    "correct": "Self-attention alone does not inherently encode token order",
    "explanation": "Without position-related information, self-attention does not by itself distinguish different orderings of the same set of token representations.",
    "theory": {
      "title": "Need for Positional Encodings",
      "what_is_it": "Self-Attention is fundamentally order-agnostic (it treats a sentence like an unordered bag of words). 'Dog bites man' and 'Man bites dog' look 100% identical to raw self-attention!",
      "why_we_need_it": "Word order is essential for human language and grammar. To give the Transformer an understanding of sequence order, we inject a unique Positional Encoding (PE) vector into each word's embedding before feeding it to layer 1.",
      "how_it_works": "The positional vector PE_t is added element-wise to the word embedding E_t: X_t = E_t + PE_t. In the original paper, fixed sinusoidal formulas (sine and cosine of different frequencies) were used. Modern models use learned embeddings or Rotary Position Embeddings (RoPE).",
      "formula": "Input Vector = WordEmbedding(Token) + PositionalEncoding(Position)",
      "key_takeaways": [
        "Self-attention alone is permutation-equivariant (cannot distinguish word order).",
        "Positional encodings add order awareness (first, second, third word).",
        "Can be fixed sinusoidal functions, learned vectors, or rotary embeddings (RoPE)."
      ]
    },
    "sample_questions": [
      {
        "q": "What mathematical property explains why self-attention cannot distinguish 'Dog bites man' from 'Man bites dog' without positional encodings?",
        "options": [
          "Orthogonality",
          "Permutation Equivariance (order invariance)",
          "Linear Separability",
          "Convexity"
        ],
        "ans": "Permutation Equivariance (order invariance)",
        "exp": "Without positional information, attention treats inputs as an unordered set of tokens."
      },
      {
        "q": "How were positional encodings constructed in the original 'Attention Is All You Need' paper?",
        "options": [
          "Learned discrete hash tables",
          "Random Gaussian noise",
          "One-hot integer indices",
          "Using fixed sinusoidal functions of various frequencies (sine and cosine)"
        ],
        "ans": "Using fixed sinusoidal functions of various frequencies (sine and cosine)",
        "exp": "The original Transformer used fixed sine and cosine functions: PE(pos, 2i) = sin(pos / 10000^(2i/d))."
      }
    ]
  },
  {
    "id": "q32",
    "module_id": "mod4",
    "module_name": "Module 4: Positional Encoding & Sequence Modeling",
    "syllabus_lec": "Lectures 29-30",
    "topic": "2D Spatial Coordinate Representation in Vision Transformers",
    "difficulty": "Medium",
    "points": 2,
    "question": "A ViT receives the same patch-content vectors in two different spatial orders but is given no positional information. What key distinction is the model least able to represent?",
    "options": [
      "The numerical values inside each patch vector",
      "The hidden dimension of the encoder",
      "The number of channels used by the input image",
      "Which patch content occurred at which image location"
    ],
    "correct": "Which patch content occurred at which image location",
    "explanation": "Without positional information, the model lacks an explicit signal tying patch content to a specific spatial location.",
    "theory": {
      "title": "2D Spatial Positional Embeddings in Vision Transformers",
      "what_is_it": "A Vision Transformer (ViT) chops an image into square patches (e.g. 16 \u00d7 16) and treats them like a sequence of words. Without positional embeddings, an image looks like a jumbled jigsaw puzzle!",
      "why_we_need_it": "In computer vision, knowing where an eye, nose, or wheel is located relative to other parts is critical. Positional embeddings tell the model the 2D spatial coordinate of each patch.",
      "how_it_works": "ViT adds a learned 1D/2D positional embedding vector E_pos to each patch token: Z\u2080 = [x_class; x_patch\u00b9; ...; x_patch^N] + E_pos. During training, these vectors learn 2D spatial grid relationships automatically.",
      "formula": "Z\u2080 = PatchEmbeddings + PositionalEmbeddings, with shape ((N+1) tokens \u00d7 d_model)",
      "key_takeaways": [
        "Without positional encodings, ViT cannot distinguish between an image and a scrambled puzzle.",
        "1D learned positional embeddings are added to all patch tokens plus the [CLS] token.",
        "During training, the model learns 2D spatial coordinates from these embeddings."
      ]
    },
    "sample_questions": [
      {
        "q": "Why do standard CNNs not strictly require positional encodings for classification while ViTs do?",
        "options": [
          "CNNs process text",
          "CNNs do not use matrices",
          "CNNs have built-in spatial inductive bias through local sliding 2D convolution filters",
          "CNNs have no parameters"
        ],
        "ans": "CNNs have built-in spatial inductive bias through local sliding 2D convolution filters",
        "exp": "Convolution operations naturally preserve 2D spatial grid neighborhood structures."
      },
      {
        "q": "When fine-tuning a ViT on higher resolution images (e.g. 224x224 to 384x384), what is done to the positional embedding table?",
        "options": [
          "Zero padding only",
          "Discard the model weights",
          "2D bicubic interpolation to match the new patch grid count",
          "Halve the hidden dimension"
        ],
        "ans": "2D bicubic interpolation to match the new patch grid count",
        "exp": "The increased grid of patches requires interpolating the learned positional embeddings."
      }
    ]
  },
  {
    "id": "q21",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Image Patch Partitioning Formula (16\u00d716 Patches on 224\u00d7224 Image)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A 224 \u00d7 224 image is split into non-overlapping 16 \u00d7 16 patches. How many image patches are produced?",
    "options": [
      "144",
      "196",
      "256",
      "224"
    ],
    "correct": "196",
    "explanation": "There are 224 \u00f7 16 = 14 patches along each axis, so 14 \u00d7 14 = 196 patches.",
    "theory": {
      "title": "Vision Transformer (ViT) Patch Partitioning",
      "what_is_it": "Standard Transformers process a sequence of 1D words. To feed a 2D image into a Transformer, Vision Transformer (ViT) slices the image into a grid of non-overlapping square tiles called patches (like cutting a photo into puzzle pieces).",
      "why_we_need_it": "Treating every single pixel as a token would create 50,000+ tokens, which would crash GPU memory! Grouping pixels into 16 \u00d7 16 patches reduces the sequence length to a manageable 196 tokens.",
      "how_it_works": "Given an image of height H, width W, and patch size P: Number of patches along height = H / P = 224 / 16 = 14. Number of patches along width = W / P = 224 / 16 = 14. Total patches = 14 \u00d7 14 = 196.",
      "formula": "Total Patches N = (H \u00d7 W) / P\u00b2 = (224 / 16)\u00b2 = 14\u00b2 = 196",
      "key_takeaways": [
        "Formula: N = (H / P) \u00d7 (W / P) = (H \u00d7 W) / P\u00b2.",
        "For 224\u00d7224 image with 16\u00d716 patches: 14 \u00d7 14 = 196 patches.",
        "Each patch acts as a 'visual word' entering the Transformer."
      ]
    },
    "sample_questions": [
      {
        "q": "For a 256 \u00d7 256 image split into 16 \u00d7 16 patches, how many patches are produced?",
        "options": [
          "512",
          "196",
          "144",
          "256 (since 16 \u00d7 16 = 256)"
        ],
        "ans": "256 (since 16 \u00d7 16 = 256)",
        "exp": "(256/16) \u00d7 (256/16) = 16 \u00d7 16 = 256."
      },
      {
        "q": "If an image is 384 \u00d7 384 and patch size is 32 \u00d7 32, how many patches are obtained?",
        "options": [
          "256",
          "144 (since 12 \u00d7 12 = 144)",
          "169",
          "196"
        ],
        "ans": "144 (since 12 \u00d7 12 = 144)",
        "exp": "(384/32) \u00d7 (384/32) = 12 \u00d7 12 = 144."
      }
    ]
  },
  {
    "id": "q22",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Encoder Sequence Length with the Added [CLS] Classification Token",
    "difficulty": "Medium",
    "points": 2,
    "question": "For the 224 \u00d7 224 image with 16 \u00d7 16 patches, what is the encoder sequence length after one CLS token is prepended?",
    "options": [
      "198",
      "196",
      "197",
      "225"
    ],
    "correct": "197",
    "explanation": "The image produces 196 patch tokens, and prepending one CLS token gives 196 + 1 = 197 tokens.",
    "theory": {
      "title": "[CLS] Token in Vision Transformers",
      "what_is_it": "The [CLS] (Classification) token is a special dummy token added right at the beginning (index 0) of the patch sequence. It acts like an 'information sponge' that absorbs the overall meaning of the entire image.",
      "why_we_need_it": "Images have 196 separate patch outputs. Instead of wondering which patch represents the whole image, the [CLS] token interacts with all 196 patches via self-attention and produces a single unified summary vector used to predict the image class (e.g. 'cat' or 'dog').",
      "how_it_works": "Total sequence length L = N_patches + 1 = 196 + 1 = 197. At the final layer, only the output vector of the [CLS] token is passed into the MLP classification head.",
      "formula": "Sequence Length L = N_patches + 1 = 196 + 1 = 197",
      "key_takeaways": [
        "Total sequence length entering the encoder = N + 1.",
        "[CLS] token aggregates global visual context across all patches.",
        "Only the [CLS] token output is fed to the final classification classifier."
      ]
    },
    "sample_questions": [
      {
        "q": "If a ViT receives 49 image patches and includes one [CLS] token, what is the total sequence length?",
        "options": [
          "49",
          "50 (since 49 + 1 = 50)",
          "100",
          "98"
        ],
        "ans": "50 (since 49 + 1 = 50)",
        "exp": "N + 1 = 49 + 1 = 50."
      },
      {
        "q": "What is an alternative to using a [CLS] token for image classification in ViT?",
        "options": [
          "Discarding all patch embeddings",
          "Global Average Pooling (GAP) across all output patch tokens",
          "Adding an RNN layer",
          "Taking only the last patch token"
        ],
        "ans": "Global Average Pooling (GAP) across all output patch tokens",
        "exp": "Averaging all patch tokens is an alternative way to get a global image vector."
      }
    ]
  },
  {
    "id": "q23",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Image Patch Partitioning with Larger Patches (32\u00d732 Patches)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A 224 \u00d7 224 image uses 32 \u00d7 32 non-overlapping patches. How many patch tokens are created before adding any special token?",
    "options": [
      "49",
      "196",
      "98",
      "64"
    ],
    "correct": "49",
    "explanation": "224 \u00f7 32 = 7 patches per side, so 7 \u00d7 7 = 49 patch tokens.",
    "theory": {
      "title": "Effect of Larger Patch Sizes",
      "what_is_it": "When choosing a patch size, larger patches (like 32 \u00d7 32) take bigger bites of the image, while smaller patches (like 16 \u00d7 16) capture fine details.",
      "why_we_need_it": "Larger patches produce far fewer tokens (49 vs 196), making training and inference dramatically faster (since attention scales quadratically with sequence length).",
      "how_it_works": "Number of patches per side = 224 / 32 = 7. Total patches = 7 \u00d7 7 = 49 tokens.",
      "formula": "Total Patches = (224 / 32)\u00b2 = 7\u00b2 = 49",
      "key_takeaways": [
        "Larger patch size (32\u00d732) = 49 tokens.",
        "Smaller patch size (16\u00d716) = 196 tokens.",
        "Fewer tokens mean 16x faster attention computation (49\u00b2 vs 196\u00b2)."
      ]
    },
    "sample_questions": [
      {
        "q": "In the standard naming convention 'ViT-B/32', what does the number 32 represent?",
        "options": [
          "32 color channels",
          "32 encoder layers",
          "32 attention heads",
          "32 \u00d7 32 pixel patch size"
        ],
        "ans": "32 \u00d7 32 pixel patch size",
        "exp": "In ViT notation, the suffix after '/' denotes patch dimension P in pixels."
      },
      {
        "q": "How does attention memory in ViT-B/32 (49 tokens) compare to ViT-B/16 (196 tokens)?",
        "options": [
          "They use equal memory",
          "ViT-B/32 uses 2x more memory",
          "ViT-B/32 uses 16x less attention matrix memory (since 196/49 = 4, and 4\u00b2 = 16)",
          "ViT-B/32 uses 4x more memory"
        ],
        "ans": "ViT-B/32 uses 16x less attention matrix memory (since 196/49 = 4, and 4\u00b2 = 16)",
        "exp": "Attention matrix memory scales quadratically with sequence length."
      }
    ]
  },
  {
    "id": "q24",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Effect of Halving Patch Size on Total Token Count (Inverse Quadratic Law)",
    "difficulty": "Hard",
    "points": 2,
    "question": "A ViT changes its patch size from 16 \u00d7 16 to 8 \u00d7 8 while image resolution stays unchanged. By what factor does the number of patch tokens change?",
    "options": [
      "It becomes 4 times larger",
      "It becomes 8 times larger",
      "It becomes 2 times larger",
      "It is unchanged"
    ],
    "correct": "It becomes 4 times larger",
    "explanation": "Halving patch width doubles the number of patches along both image axes, so the total token count grows by 2 \u00d7 2 = 4.",
    "theory": {
      "title": "Patch Size Scaling Law (Inverse Quadratic)",
      "what_is_it": "The total number of patches N is inversely proportional to the area of a single patch: N = (H \u00d7 W) / P\u00b2.",
      "why_we_need_it": "Halving the patch width and height (P -> P/2) means that each old patch is now split into 4 smaller patches (2 \u00d7 2 = 4).",
      "how_it_works": "N_new = (H \u00d7 W) / (P/2)\u00b2 = 4 \u00d7 (H \u00d7 W) / P\u00b2 = 4 \u00d7 N. For 224\u00d7224: at P=16, N=196; at P=8, N = 28 \u00d7 28 = 784 (784 / 196 = 4x).",
      "formula": "Token Count Scaling: Halving P quadruples N (4x)",
      "key_takeaways": [
        "Halving patch size (P/2) quadruples the token count (4x).",
        "Doubling patch size (2P) reduces the token count to 1/4th.",
        "Attention compute increases by 16x when patch size is halved (4\u00b2 = 16)."
      ]
    },
    "sample_questions": [
      {
        "q": "If patch size is doubled from 8\u00d78 to 16\u00d716, the number of tokens:",
        "options": [
          "Stays constant",
          "Decreases to 1/4th",
          "Decreases to 1/2",
          "Increases 4x"
        ],
        "ans": "Decreases to 1/4th",
        "exp": "Doubling P multiplies denominator by 4, reducing N to 1/4."
      },
      {
        "q": "If patch size is halved from 16 to 8, what happens to the attention matrix memory cost?",
        "options": [
          "Increases by 4x",
          "Increases by 8x",
          "Stays constant",
          "Increases by 16x (since 4\u00b2 = 16)"
        ],
        "ans": "Increases by 16x (since 4\u00b2 = 16)",
        "exp": "Token count grows by 4x, and attention cost scales quadratically (4)\u00b2 = 16x."
      }
    ]
  },
  {
    "id": "q25",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Flattened Patch Dimensionality Calculation (Height \u00d7 Width \u00d7 Channels = 768)",
    "difficulty": "Medium",
    "points": 2,
    "question": "For an RGB image, how many scalar pixel values are contained in a flattened 16 \u00d7 16 patch before linear projection?",
    "options": [
      "256",
      "512",
      "768",
      "1024"
    ],
    "correct": "768",
    "explanation": "An RGB patch contains 16 \u00d7 16 \u00d7 3 = 768 scalar channel values.",
    "theory": {
      "title": "Raw Flattened Patch Vector Size",
      "what_is_it": "An RGB image patch is a small 3D block of pixels with dimensions: (Height \u00d7 Width \u00d7 Color Channels).",
      "why_we_need_it": "Before this patch can be multiplied by linear projection matrices, it is unrolled (flattened) into a single 1D vector of raw pixel numbers.",
      "how_it_works": "For a 16 \u00d7 16 RGB image (3 color channels: Red, Green, Blue): Flattened Size = 16 \u00d7 16 \u00d7 3 = 256 \u00d7 3 = 768 pixel values.",
      "formula": "Flattened Vector Length = P \u00d7 P \u00d7 Channels = 16 \u00d7 16 \u00d7 3 = 768",
      "key_takeaways": [
        "Flattened dimension = P\u00b2 \u00d7 Channels.",
        "For 16\u00d716 RGB image (Channels=3): 16 \u00d7 16 \u00d7 3 = 768.",
        "For 16\u00d716 Grayscale image (Channels=1): 16 \u00d7 16 \u00d7 1 = 256."
      ]
    },
    "sample_questions": [
      {
        "q": "For a grayscale image (Channels=1) with 16\u00d716 patches, what is the flattened vector length?",
        "options": [
          "512",
          "768",
          "16",
          "256 (since 16 \u00d7 16 \u00d7 1 = 256)"
        ],
        "ans": "256 (since 16 \u00d7 16 \u00d7 1 = 256)",
        "exp": "16 \u00d7 16 \u00d7 1 = 256."
      },
      {
        "q": "For an RGB image (Channels=3) with 32\u00d732 patches, what is the flattened vector length?",
        "options": [
          "1024",
          "4096",
          "2048",
          "3072 (since 32 \u00d7 32 \u00d7 3 = 3072)"
        ],
        "ans": "3072 (since 32 \u00d7 32 \u00d7 3 = 3072)",
        "exp": "32 \u00d7 32 \u00d7 3 = 1024 \u00d7 3 = 3072."
      }
    ]
  },
  {
    "id": "q26",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Role of Linear Patch Projection in Mapping Pixels to Transformer Hidden Space",
    "difficulty": "Easy",
    "points": 1,
    "question": "What determines the dimensionality of each patch token after the ViT patch-projection layer?",
    "options": [
      "The Transformer's chosen hidden size",
      "The image filename length",
      "The number of training epochs",
      "The number of image classes only"
    ],
    "correct": "The Transformer's chosen hidden size",
    "explanation": "The patch projection maps each flattened patch to the model embedding or hidden dimension used by the Transformer encoder.",
    "theory": {
      "title": "Linear Patch Projection Layer",
      "what_is_it": "The Linear Patch Projection is the visual equivalent of an NLP word-embedding table. It takes the flattened 768-pixel patch and multiplies it by a learned projection matrix E to convert it into a d_model-dimensional token embedding (e.g. 768 in ViT-Base or 1024 in ViT-Large).",
      "why_we_need_it": "Raw pixel intensities are noisy and have fixed physical dimensions. Linear projection maps them into the continuous latent space required by the Transformer encoder.",
      "how_it_works": "In code, this is implemented as a 2D convolution: nn.Conv2d(in_channels=3, out_channels=d_model, kernel_size=16, stride=16).",
      "formula": "Patch Token = (Flattened Pixels) \u00b7 E, where E is of size (P\u00b2 \u00d7 Channels) \u00d7 d_model",
      "key_takeaways": [
        "Projects raw patch pixels into the Transformer hidden dimension (d_model).",
        "Determined by the model architecture configuration (e.g. 768 for Base, 1024 for Large).",
        "Equivalent to a 2D convolution with stride equal to patch size."
      ]
    },
    "sample_questions": [
      {
        "q": "In PyTorch, which nn.Conv2d layer implements non-overlapping patch projection for P=16 and d_model=768 on RGB images?",
        "options": [
          "nn.Conv2d(in_channels=3, out_channels=768, kernel_size=16, stride=16)",
          "nn.Conv2d(in_channels=3, out_channels=196, kernel_size=3, stride=1)",
          "nn.Conv2d(in_channels=768, out_channels=3, kernel_size=16, stride=1)",
          "nn.Conv2d(in_channels=3, out_channels=768, kernel_size=1, stride=1)"
        ],
        "ans": "nn.Conv2d(in_channels=3, out_channels=768, kernel_size=16, stride=16)",
        "exp": "A convolution with kernel size and stride equal to patch size (16) extracts and linearly projects non-overlapping patches."
      },
      {
        "q": "If we change our classification dataset from 10 classes to 1,000 classes, does the patch projection dimension change?",
        "options": [
          "No, it remains equal to d_model (only the final classification head changes)",
          "Yes, patch size must decrease",
          "It resets to 3",
          "Yes, it becomes 1000"
        ],
        "ans": "No, it remains equal to d_model (only the final classification head changes)",
        "exp": "Patch projection maps pixels into d_model; only the final linear head output changes."
      }
    ]
  },
  {
    "id": "q27",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Total Number of Positional Embeddings Required (N patches + 1 [CLS])",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a standard ViT with a CLS token, how many positional embeddings are needed for an input sequence of 196 patches?",
    "options": [
      "392",
      "196",
      "195",
      "197"
    ],
    "correct": "197",
    "explanation": "Position information is needed for all 196 patch tokens plus the single CLS token, giving 197 positions.",
    "theory": {
      "title": "Positional Embedding Count in ViT",
      "what_is_it": "Every single token that enters the Transformer encoder needs a positional embedding added to it.",
      "why_we_need_it": "Because element-wise vector addition (Token + PositionalEmbedding) is performed, the positional embedding table must contain exactly one positional vector for each position in the sequence.",
      "how_it_works": "There are 196 patch tokens plus 1 prepended [CLS] token at index 0. Therefore, the positional embedding table must contain 196 + 1 = 197 vectors.",
      "formula": "Total Positional Vectors = N_patches + 1 = 196 + 1 = 197",
      "key_takeaways": [
        "Positional embeddings count = Patches + 1 [CLS].",
        "For 196 patches: 196 + 1 = 197 embeddings.",
        "Shape of positional embedding table: (197, d_model)."
      ]
    },
    "sample_questions": [
      {
        "q": "If a ViT has 64 image patches and uses both a [CLS] token and a [DISTILLATION] token (like DeiT), how many positional embeddings are needed?",
        "options": [
          "128",
          "66 (since 64 + 1 + 1 = 66)",
          "65",
          "64"
        ],
        "ans": "66 (since 64 + 1 + 1 = 66)",
        "exp": "64 + 1 + 1 = 66."
      },
      {
        "q": "What happens if you try to add 196 positional embeddings to a sequence that has 197 tokens?",
        "options": [
          "PyTorch throws a tensor shape mismatch runtime error during element-wise addition",
          "Image size doubles",
          "The model works fine",
          "The [CLS] token is automatically deleted"
        ],
        "ans": "PyTorch throws a tensor shape mismatch runtime error during element-wise addition",
        "exp": "Element-wise addition requires identical tensor shapes."
      }
    ]
  },
  {
    "id": "q28",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Nature and Initialization of the Learned [CLS] Token",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which statement best describes the initial CLS token used in a standard Vision Transformer?",
    "options": [
      "It is the average RGB value of the image",
      "It is a learned embedding prepended to the patch sequence",
      "It is the brightest image patch selected at runtime",
      "It is a fixed one-hot vector for the predicted class"
    ],
    "correct": "It is a learned embedding prepended to the patch sequence",
    "explanation": "The CLS token is a learned vector inserted into the sequence and updated through the encoder to aggregate information for classification.",
    "theory": {
      "title": "Initialization of the [CLS] Token",
      "what_is_it": "The [CLS] token is a trainable 1D parameter vector initialized randomly before training starts.",
      "why_we_need_it": "It contains no initial image data. It is prepended to every image sequence and learns through backpropagation how to gather the most useful clues from all other image patches.",
      "how_it_works": "In PyTorch: self.cls_token = nn.Parameter(torch.zeros(1, 1, d_model)). It is repeated across the batch and concatenated at index 0 before layer 1.",
      "formula": "Sequence = [CLS_Token, Patch_1, Patch_2, ..., Patch_N] + PositionalEmbeddings",
      "key_takeaways": [
        "The [CLS] token is a learned parameter vector initialized randomly (or zeros).",
        "It contains no pixel data at the input layer.",
        "Aggregates global visual semantics across all layers."
      ]
    },
    "sample_questions": [
      {
        "q": "How is the [CLS] token initialized in standard PyTorch ViT implementations?",
        "options": [
          "As zeros, small random normal values, or truncated normal weights",
          "From the first 16x16 pixels of the image",
          "As the class label integer",
          "As an empty tensor"
        ],
        "ans": "As zeros, small random normal values, or truncated normal weights",
        "exp": "It is a learnable parameter tensor initialized before training."
      },
      {
        "q": "Why does the [CLS] token attend to all other patches in the image?",
        "options": [
          "To average pixel RGB values",
          "To compress the image into JPEG",
          "To compute optical flow",
          "To collect high-level semantic features needed to classify the image"
        ],
        "ans": "To collect high-level semantic features needed to classify the image",
        "exp": "Attention allows it to act as an information sponge for classification."
      }
    ]
  },
  {
    "id": "q29",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Global Receptive Field in Vision Transformers vs Local CNN Filters",
    "difficulty": "Medium",
    "points": 2,
    "question": "Which ViT component directly allows a patch token in the top-left region to incorporate information from a distant bottom-right patch in one encoder layer?",
    "options": [
      "Patch flattening",
      "Self-attention",
      "Linear patch projection",
      "Classification softmax"
    ],
    "correct": "Self-attention",
    "explanation": "Self-attention can form a direct interaction between any pair of patch tokens within the same layer.",
    "theory": {
      "title": "Global Receptive Field (ViT vs CNN)",
      "what_is_it": "In a CNN, a 3 \u00d7 3 convolutional filter can only see adjacent neighboring pixels. Connecting pixels from opposite corners of an image requires stacking dozens of deep layers.",
      "why_we_need_it": "In a Vision Transformer, Self-Attention compares every patch to every other patch in the very first layer! A patch in the top-left corner can look directly at a patch in the bottom-right corner immediately.",
      "how_it_works": "The attention matrix computes dot-products between all pairs across the entire image in a single layer, giving ViT an immediate global receptive field.",
      "formula": "ViT Receptive Field Path Length = 1 Layer (Global Attention) vs O(Depth) in CNNs",
      "key_takeaways": [
        "Self-attention provides an immediate global receptive field from Layer 1.",
        "CNNs have local receptive fields that grow slowly with layer depth.",
        "Allows ViTs to easily capture long-range visual dependencies."
      ]
    },
    "sample_questions": [
      {
        "q": "How many layers does a ViT need to connect opposite corners of an image compared to a CNN?",
        "options": [
          "They are identical",
          "CNNs can never connect opposite corners",
          "1 layer for CNN, 10 layers for ViT",
          "1 layer for ViT, but many deep layers for CNN"
        ],
        "ans": "1 layer for ViT, but many deep layers for CNN",
        "exp": "ViT self-attention is global across all patches in every layer."
      },
      {
        "q": "What is the tradeoff for ViT's immediate global receptive field compared to CNNs?",
        "options": [
          "ViT has no parameters",
          "ViT has higher quadratic computational cost and requires larger training datasets due to lack of local inductive bias",
          "ViT cannot run on GPUs",
          "ViT cannot handle color images"
        ],
        "ans": "ViT has higher quadratic computational cost and requires larger training datasets due to lack of local inductive bias",
        "exp": "Without CNN's built-in 2D bias, ViTs require more data (e.g. ImageNet-21k / JFT) to learn spatial patterns."
      }
    ]
  },
  {
    "id": "q30",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Effect of Doubling Image Resolution on Patch Token Count",
    "difficulty": "Hard",
    "points": 2,
    "question": "Image resolution increases from 224 \u00d7 224 to 448 \u00d7 448 while patch size remains 16 \u00d7 16. How does the number of patch tokens change?",
    "options": [
      "It becomes 8 times larger",
      "It becomes 4 times larger",
      "It remains the same",
      "It becomes 2 times larger"
    ],
    "correct": "It becomes 4 times larger",
    "explanation": "Doubling both image dimensions doubles patch count along each axis, so the total number of patches increases by a factor of four.",
    "theory": {
      "title": "Resolution Scaling Analysis",
      "what_is_it": "When you increase the resolution of an image (e.g. from 224 \u00d7 224 to 448 \u00d7 448), both the height and the width double (2x height, 2x width).",
      "why_we_need_it": "Doubling both axes multiplies the total image pixel area by 2 \u00d7 2 = 4x.",
      "how_it_works": "At 224 \u00d7 224: (224/16) \u00d7 (224/16) = 14 \u00d7 14 = 196 patches. At 448 \u00d7 448: (448/16) \u00d7 (448/16) = 28 \u00d7 28 = 784 patches. Ratio: 784 / 196 = 4x.",
      "formula": "Token Growth Ratio = (2H \u00d7 2W) / (H \u00d7 W) = 4x",
      "key_takeaways": [
        "Doubling image resolution (2H \u00d7 2W) quadruples total patches (4x).",
        "Token count grows from 196 to 784.",
        "Attention computation memory increases by 16x (4\u00b2 = 16)."
      ]
    },
    "sample_questions": [
      {
        "q": "If image resolution is tripled along both dimensions (e.g. 100\u00d7100 to 300\u00d7300) with constant patch size, token count grows by:",
        "options": [
          "3x",
          "6x",
          "27x",
          "9x (since 3\u00b2 = 9)"
        ],
        "ans": "9x (since 3\u00b2 = 9)",
        "exp": "3 \u00d7 3 = 9x."
      },
      {
        "q": "What happens to self-attention memory when image resolution doubles from 224 to 448?",
        "options": [
          "Remains unchanged",
          "Increases by 2x",
          "Increases by 16x",
          "Increases by 4x"
        ],
        "ans": "Increases by 16x",
        "exp": "Patch tokens increase by 4x, and attention cost scales quadratically (4)\u00b2 = 16x."
      }
    ]
  },
  {
    "id": "q31",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Computational Bottleneck of Small Patches and Shifted Windows (Swin)",
    "difficulty": "Hard",
    "points": 2,
    "question": "What is the main self-attention cost implication of using substantially smaller patches in a ViT at fixed image resolution?",
    "options": [
      "The number of image channels automatically increases",
      "The token sequence becomes shorter and attention becomes more expensive",
      "Patch projection disappears completely",
      "A longer token sequence makes the attention matrix much larger"
    ],
    "correct": "A longer token sequence makes the attention matrix much larger",
    "explanation": "Smaller patches create more tokens, and full self-attention cost grows approximately quadratically with sequence length.",
    "theory": {
      "title": "Patch Granularity vs Complexity (Swin Transformer)",
      "what_is_it": "Smaller patches provide finer detail (e.g. 4 \u00d7 4 patches), but generate an enormous number of tokens. Because full self-attention is O(N\u00b2), the attention matrix explodes!",
      "why_we_need_it": "To overcome this quadratic explosion while retaining fine detail, the Swin Transformer was created. It computes self-attention inside small local shifted windows with linear complexity O(N) instead of full O(N\u00b2).",
      "how_it_works": "Standard ViT FLOPs scale as O(N\u00b2). Swin groups patches into M \u00d7 M local windows and shifts them between layers to allow cross-window communication with linear O(N) efficiency.",
      "formula": "Standard ViT Attention Complexity = O(N\u00b2) vs Swin Transformer = O(M\u00b2 \u00b7 N) = O(N)",
      "key_takeaways": [
        "Smaller patches drastically increase sequence length N.",
        "Full self-attention cost scales quadratically O(N\u00b2).",
        "Swin Transformer solves this using shifted local windows with linear O(N) complexity."
      ]
    },
    "sample_questions": [
      {
        "q": "Which Vision Transformer architecture solves the quadratic attention bottleneck by computing attention inside local shifted windows?",
        "options": [
          "ViT-Base",
          "BERT-Vision",
          "Swin Transformer",
          "AlexNet"
        ],
        "ans": "Swin Transformer",
        "exp": "Swin restricts attention to local windows, achieving linear O(N) complexity."
      },
      {
        "q": "Why is pixel-level attention (P = 1 \u00d7 1) impractical for standard 224 \u00d7 224 images?",
        "options": [
          "Sequence length would be 50,176 tokens, creating an attention matrix of ~2.5 billion elements per head",
          "Images cannot be split into pixels",
          "Color information is lost",
          "Pixels have negative values"
        ],
        "ans": "Sequence length would be 50,176 tokens, creating an attention matrix of ~2.5 billion elements per head",
        "exp": "The resulting 2.5B float score matrix would instantly crash GPU VRAM."
      }
    ]
  },
  {
    "id": "q33",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Primary Function of Linear Patch Projection",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the primary job of the initial linear projection applied to each flattened image patch in a ViT?",
    "options": [
      "Generate a causal language-model mask",
      "Compute relationships between every pair of patches",
      "Map the patch vector into the Transformer embedding space",
      "Predict the final image class directly"
    ],
    "correct": "Map the patch vector into the Transformer embedding space",
    "explanation": "The projection converts each raw flattened patch vector into a fixed-dimensional token embedding suitable for the Transformer encoder.",
    "theory": {
      "title": "Linear Patch Projection Purpose",
      "what_is_it": "Raw flattened patches are just raw lists of RGB pixel brightness numbers (from 0 to 255). The linear projection acts like a translator, turning raw pixels into high-dimensional embedding vectors.",
      "why_we_need_it": "The Transformer encoder expects tokens of dimension d_model (e.g. 768). Linear projection provides this continuous vector mapping.",
      "how_it_works": "The flattened vector x_patch of length 768 is multiplied by projection matrix E to produce token embedding z_patch of dimension d_model.",
      "formula": "Patch Token = FlattenedPixels \u00b7 E + b_E",
      "key_takeaways": [
        "Converts raw flattened pixel values into Transformer token embeddings.",
        "Learns continuous representations during backpropagation.",
        "Can also be replaced by CNN feature maps (Hybrid ViT)."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the role of projection matrix E in ViT?",
        "options": [
          "Normalizes image brightness",
          "Projects each flattened patch vector into a d_model-dimensional token embedding",
          "Performs backpropagation",
          "Computes Softmax weights"
        ],
        "ans": "Projects each flattened patch vector into a d_model-dimensional token embedding",
        "exp": "It acts as the visual equivalent of an NLP word-embedding lookup table."
      },
      {
        "q": "Can the linear patch projection be replaced by a shallow CNN backbone in a Hybrid ViT?",
        "options": [
          "Only for black-and-white images",
          "No, ViT strictly forbids convolutions",
          "Yes, CNN feature maps can be flattened into input tokens",
          "Only during inference"
        ],
        "ans": "Yes, CNN feature maps can be flattened into input tokens",
        "exp": "Hybrid architectures use CNN layers to extract feature maps before the Transformer."
      }
    ]
  },
  {
    "id": "q34",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Independence of Patch Count from Transformer Hidden Size",
    "difficulty": "Medium",
    "points": 1,
    "question": "If a ViT increases its hidden size but keeps image resolution and patch size unchanged, which quantity stays unchanged at the encoder input?",
    "options": [
      "The width of attention projection matrices",
      "The dimension of each token embedding",
      "The number of patch tokens",
      "The number of parameters in the patch projection"
    ],
    "correct": "The number of patch tokens",
    "explanation": "Patch count depends on image and patch dimensions. Increasing hidden size changes feature dimensions and parameter counts, not the number of patches.",
    "theory": {
      "title": "Decoupling Token Count and Hidden Size",
      "what_is_it": "The number of patch tokens (N) is purely a geometric property: N = (H \u00d7 W) / P\u00b2. The hidden size (d_model) is a neural network architectural width choice.",
      "why_we_need_it": "Changing the model width (e.g. from ViT-Base with d=768 to ViT-Large with d=1024) makes every vector fatter, but the total number of patches remains exactly 196!",
      "how_it_works": "Patch count N = (224/16)\u00b2 = 196 is fixed by image resolution and patch size. Increasing d_model changes parameter counts and vector widths, but never changes N.",
      "formula": "Patch Count N = (H \u00d7 W) / P\u00b2 (Independent of d_model)",
      "key_takeaways": [
        "Patch count depends only on image dimensions (H, W) and patch size (P).",
        "Hidden size (d_model) changes vector width and layer parameter count.",
        "Moving from ViT-Base to ViT-Large leaves the number of patch tokens unchanged."
      ]
    },
    "sample_questions": [
      {
        "q": "When moving from ViT-Base (d_model=768) to ViT-Large (d_model=1024) on 224\u00d7224 images with 16\u00d716 patches, what happens to the number of tokens?",
        "options": [
          "Increases to 256",
          "Decreases to 144",
          "Remains exactly 196",
          "Doubles"
        ],
        "ans": "Remains exactly 196",
        "exp": "Patch count is fixed by spatial resolution: (224/16)\u00b2 = 196."
      },
      {
        "q": "Which parameter count DOES change when increasing d_model from 768 to 1024?",
        "options": [
          "The patch size P",
          "The number of pixels in the input image",
          "The number of patches N",
          "The size of the linear patch projection matrix E"
        ],
        "ans": "The size of the linear patch projection matrix E",
        "exp": "The projection matrix weights grow from 768 \u00d7 768 to 768 \u00d7 1024."
      }
    ]
  },
  {
    "id": "q35",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Autoregressive Probability Factorization (Chain Rule of Next-Token Prediction)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which probability factorization matches an autoregressive language model for token x_t?",
    "options": [
      "Predict x_t only from the sequence length",
      "Predict every token independently of the sequence",
      "Predict x_t using only tokens after x_t",
      "Predict x_t conditioned on tokens before x_t"
    ],
    "correct": "Predict x_t conditioned on tokens before x_t",
    "explanation": "Autoregressive language modelling factorizes sequence probability into conditional next-token probabilities based on preceding context.",
    "theory": {
      "title": "Autoregressive Language Modeling",
      "what_is_it": "An Autoregressive (Causal) Language Model (like GPT) generates text one word at a time, where each new word is predicted based on all the previous words that came before it.",
      "why_we_need_it": "This matches how humans write and speak: when you say a sentence, each word you speak depends on what you have already said so far.",
      "how_it_works": "By the probability chain rule, the probability of an entire sentence equals the product of individual conditional probabilities: P(Sequence) = P(x\u2081) \u00b7 P(x\u2082 | x\u2081) \u00b7 P(x\u2083 | x\u2081, x\u2082) ... The model is trained using Cross-Entropy Loss to maximize the probability of correct next tokens.",
      "formula": "P(x\u2081, x\u2082, ..., x_T) = Product (from t=1 to T) of P(x_t | x\u2081, x\u2082, ..., x_{t-1})",
      "key_takeaways": [
        "Autoregressive = predicts token t conditioned strictly on past tokens x_<t.",
        "Foundation of all modern generative LLMs (GPT-4, Claude, LLaMA).",
        "Trained via next-token prediction loss."
      ]
    },
    "sample_questions": [
      {
        "q": "How is the joint probability P(w\u2081, w\u2082, w\u2083) broken down in an autoregressive model?",
        "options": [
          "P(w\u2081) * P(w\u2082 | w\u2081) * P(w\u2083 | w\u2081, w\u2082)",
          "P(w\u2081 | w\u2082, w\u2083)",
          "P(w\u2081) * P(w\u2082) * P(w\u2083)",
          "P(w\u2083) * P(w\u2082 | w\u2083) * P(w\u2081 | w\u2082, w\u2083)"
        ],
        "ans": "P(w\u2081) * P(w\u2082 | w\u2081) * P(w\u2083 | w\u2081, w\u2082)",
        "exp": "By the probability chain rule conditioning on historical context."
      },
      {
        "q": "Which of the following models is an autoregressive causal language model?",
        "options": [
          "BERT",
          "GPT-4",
          "RoBERTa",
          "DeBERTa"
        ],
        "ans": "GPT-4",
        "exp": "GPT is an autoregressive decoder-only model."
      }
    ]
  },
  {
    "id": "q36",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Shifted Target Alignment in Next-Token Training",
    "difficulty": "Medium",
    "points": 2,
    "question": "During causal language-model training on tokens [w\u2081, w\u2082, w\u2083, w\u2084], which target is paired with the model state that reads context through w\u2082?",
    "options": [
      "w\u2081",
      "w\u2083",
      "w\u2082",
      "w\u2084 only"
    ],
    "correct": "w\u2083",
    "explanation": "Next-token training shifts the targets by one position, so the context ending at w\u2082 is trained to predict w\u2083.",
    "theory": {
      "title": "Shifted Target Alignment",
      "what_is_it": "In next-token prediction, the training targets are the exact same input sentence shifted to the left by 1 word.",
      "why_we_need_it": "The model is trained so that when it finishes reading context up to word t, its output prediction is compared against word t+1.",
      "how_it_works": "Input: [w\u2081, w\u2082, w\u2083]. Target: [w\u2082, w\u2083, w\u2084]. Reading [w\u2081] -> predict w\u2082. Reading [w\u2081, w\u2082] -> predict w\u2083. Reading [w\u2081, w\u2082, w\u2083] -> predict w\u2084.",
      "formula": "Inputs = x[1 : T-1], Targets = x[2 : T] (Shifted by +1)",
      "key_takeaways": [
        "Targets are shifted by +1 position.",
        "Context through w_t is trained to predict w_{t+1}.",
        "PyTorch: loss = criterion(logits[:, :-1], labels[:, 1:])."
      ]
    },
    "sample_questions": [
      {
        "q": "For training sentence ['The', 'sun', 'rises', 'daily'], what is the training target after reading ['The', 'sun']?",
        "options": [
          "'daily'",
          "'sun'",
          "'The'",
          "'rises'"
        ],
        "ans": "'rises'",
        "exp": "The context ending at 'sun' must predict the next word 'rises'."
      },
      {
        "q": "Why are labels shifted by 1 to the left in CrossEntropyLoss?",
        "options": [
          "To delete the first layer",
          "To reverse the word order",
          "To align predicted logits at position t with actual token at position t+1",
          "To convert text to numbers"
        ],
        "ans": "To align predicted logits at position t with actual token at position t+1",
        "exp": "Logit at index t predicts token at index t+1."
      }
    ]
  },
  {
    "id": "q37",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Autoregressive Generation Loop & KV Caching",
    "difficulty": "Easy",
    "points": 1,
    "question": "After GPT selects a new token during generation, what normally happens before the following token is predicted?",
    "options": [
      "The causal mask is permanently removed",
      "The tokenizer vocabulary is rebuilt",
      "The selected token is appended to the context",
      "The entire model is retrained from scratch"
    ],
    "correct": "The selected token is appended to the context",
    "explanation": "Autoregressive decoding repeatedly appends the generated token and uses the expanded context to predict the next token.",
    "theory": {
      "title": "Autoregressive Generation Loop",
      "what_is_it": "Text generation in LLMs is an iterative loop: the model generates 1 token, glues it onto the end of the text prompt, and runs again to predict the next token.",
      "why_we_need_it": "Because the model conditions each word on all preceding words, newly generated words become part of the historical context for future words.",
      "how_it_works": "To avoid recomputing attention over old tokens on every step, LLM inference engines use KV Caching (storing past Key and Value vectors in GPU memory so only the single new token is processed).",
      "formula": "Context at Step k+1 = [Context at Step k, New_Token_{k+1}]",
      "key_takeaways": [
        "New token is appended to context before predicting next token.",
        "Loop repeats until an [EOS] token is emitted or max_tokens is reached.",
        "KV-Cache stores past Keys/Values to avoid redundant computation."
      ]
    },
    "sample_questions": [
      {
        "q": "What optimization avoids recomputing past Key and Value vectors during autoregressive generation?",
        "options": [
          "Weight Quantization",
          "Softmax Pruning",
          "KV Caching (Key-Value Cache)",
          "Prompt Truncation"
        ],
        "ans": "KV Caching (Key-Value Cache)",
        "exp": "KV Cache preserves past Keys and Values in VRAM."
      },
      {
        "q": "When does the autoregressive generation loop stop?",
        "options": [
          "Always after exactly 10 tokens",
          "When an [EOS] (End-of-Sequence) token is generated or max token limit is reached",
          "When weights become negative",
          "When temperature becomes 0"
        ],
        "ans": "When an [EOS] (End-of-Sequence) token is generated or max token limit is reached",
        "exp": "Generation stops on [EOS] token or maximum length limit."
      }
    ]
  },
  {
    "id": "q38",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Temperature Scaling for Controlling Randomness vs Determinism",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the usual effect of lowering the sampling temperature while keeping other decoding settings fixed?",
    "options": [
      "The token distribution becomes more peaked toward high-probability choices",
      "The model can use future tokens",
      "The context window automatically doubles",
      "The vocabulary becomes larger"
    ],
    "correct": "The token distribution becomes more peaked toward high-probability choices",
    "explanation": "Lower temperature sharpens the probability distribution, generally making high-probability tokens more dominant and generation less random.",
    "theory": {
      "title": "Temperature Scaling in Softmax",
      "what_is_it": "Temperature (T) is a knob that controls the creativity vs strictness of the model by scaling the raw logits before Softmax.",
      "why_we_need_it": "For math, coding, and factual QA, you want deterministic, strict answers (T \u2248 0.0). For creative writing, brainstorming, and storytelling, you want diverse, imaginative outputs (T \u2248 0.7 - 1.0).",
      "how_it_works": "Softmax formula with Temperature: P(i) = exp(z_i / T) / \u03a3 exp(z_j / T). As T approaches 0, the highest score shoots to 100% (greedy search). As T approaches infinity, all probabilities flatten out into equal random chance.",
      "formula": "P(Token_i) = exp(z_i / T) / \u03a3 exp(z_j / T)",
      "key_takeaways": [
        "Low Temperature (T < 0.3): Sharp distribution, deterministic, focused, logical.",
        "High Temperature (T > 0.8): Flatter distribution, creative, diverse, higher randomness.",
        "T = 0: Greedy decoding (always picks the #1 top token)."
      ]
    },
    "sample_questions": [
      {
        "q": "For coding and mathematical reasoning tasks, which temperature setting is recommended?",
        "options": [
          "Infinite temperature",
          "Low temperature (e.g. T = 0.0 or 0.2)",
          "High temperature (e.g. T = 1.8)",
          "Negative temperature"
        ],
        "ans": "Low temperature (e.g. T = 0.0 or 0.2)",
        "exp": "Low temperature produces focused, deterministic, and accurate logic."
      },
      {
        "q": "What happens as temperature T approaches infinity?",
        "options": [
          "Loss becomes zero",
          "Attention weights disappear",
          "Model generates only the top token",
          "The probability distribution becomes uniform (all words equally likely)"
        ],
        "ans": "The probability distribution becomes uniform (all words equally likely)",
        "exp": "Dividing logits by infinity makes them all 0, producing uniform random output."
      }
    ]
  },
  {
    "id": "q39",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Top-k Sampling (Restricting to the k Most Likely Tokens)",
    "difficulty": "Medium",
    "points": 1,
    "question": "What does top-k sampling do before the next token is sampled?",
    "options": [
      "Keeps tokens whose cumulative probability is exactly k percent",
      "Removes the k highest-probability tokens",
      "Restricts candidates to the k highest-probability tokens",
      "Forces the kth token to be selected every time"
    ],
    "correct": "Restricts candidates to the k highest-probability tokens",
    "explanation": "Top-k decoding retains only the k most probable next-token candidates and samples from that restricted set.",
    "theory": {
      "title": "Top-k Sampling Strategy",
      "what_is_it": "An LLM vocabulary has 50,000+ words. In pure sampling, there is always a tiny 0.0001% chance of picking a completely bizarre, nonsense word. Top-k Sampling truncates the candidate list to only the k most probable words (e.g. k = 50) and throws away the rest.",
      "why_we_need_it": "Eliminates the long 'tail' of low-probability words, preventing the model from generating random gibberish.",
      "how_it_works": "Sort all words descending by probability. Keep the top k words. Re-normalize their probabilities so they sum to 1.0, and sample only from those k candidates.",
      "formula": "Candidate Pool = { Top k highest probability tokens }",
      "key_takeaways": [
        "Restricts candidate pool strictly to the top k highest probability tokens.",
        "Cuts off bizarre low-probability tail tokens.",
        "k is a fixed integer (e.g. k = 40 or 50)."
      ]
    },
    "sample_questions": [
      {
        "q": "If vocabulary size is 32,000 and k = 40, from how many candidates does the model sample?",
        "options": [
          "32,000 candidates",
          "1,280 candidates",
          "40% of vocabulary",
          "40 candidates"
        ],
        "ans": "40 candidates",
        "exp": "Top-k explicitly restricts the pool to the top 40 candidate tokens."
      },
      {
        "q": "What is the main limitation of a fixed k in Top-k sampling?",
        "options": [
          "It increases vocabulary size",
          "It breaks backpropagation",
          "It disables LayerNorm",
          "It cannot adapt to varying uncertainty: k may be too large for obvious contexts or too small for diverse contexts"
        ],
        "ans": "It cannot adapt to varying uncertainty: k may be too large for obvious contexts or too small for diverse contexts",
        "exp": "Fixed k does not adjust dynamically when confidence fluctuates."
      }
    ]
  },
  {
    "id": "q40",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Top-p (Nucleus) Dynamic Cumulative Probability Sampling",
    "difficulty": "Hard",
    "points": 2,
    "question": "How does nucleus (top-p) sampling choose its candidate set?",
    "options": [
      "It keeps a smallest high-probability set whose cumulative probability reaches the chosen threshold p",
      "It removes all tokens with probability above p",
      "It selects only tokens whose positions are below p",
      "It always keeps exactly p tokens"
    ],
    "correct": "It keeps a smallest high-probability set whose cumulative probability reaches the chosen threshold p",
    "explanation": "Top-p sampling sorts likely tokens and retains enough of the most probable candidates to reach the specified cumulative-probability mass.",
    "theory": {
      "title": "Nucleus (Top-p) Sampling",
      "what_is_it": "Instead of fixing a hard count k, Top-p (Nucleus) Sampling sets a cumulative probability threshold p (e.g. p = 0.90 or 90%).",
      "why_we_need_it": "It dynamically adapts! If the model is 99% certain of the next word ('The capital of France is Paris'), the candidate pool shrinks to just 1 word ('Paris'). If the situation is ambiguous ('She wore a beautiful...'), the pool expands to 30 words (dress, gown, necklace, smile, etc.).",
      "how_it_works": "Tokens are sorted descending. The algorithm sums up probabilities until the running sum reaches threshold p, discarding the rest.",
      "formula": "Select smallest token set such that Sum of P(tokens) >= p (e.g. 0.90)",
      "key_takeaways": [
        "Top-p dynamically expands/contracts the candidate pool based on model confidence.",
        "Keeps the smallest set of tokens whose cumulative sum reaches threshold p.",
        "Typical values: p = 0.90 to 0.95."
      ]
    },
    "sample_questions": [
      {
        "q": "If word A has probability 0.92 and threshold p = 0.90, how many candidates are in the nucleus sample set?",
        "options": [
          "1 candidate (only word A)",
          "90 candidates",
          "10 candidates",
          "All vocabulary"
        ],
        "ans": "1 candidate (only word A)",
        "exp": "Word A alone reaches 92% (exceeding 90%), dynamically restricting the pool to 1."
      },
      {
        "q": "What is the typical recommended value range for top-p in conversational chatbots?",
        "options": [
          "1.5 to 2.0",
          "0.85 to 0.95",
          "50 to 100",
          "0.01 to 0.05"
        ],
        "ans": "0.85 to 0.95",
        "exp": "A threshold of 0.85 to 0.95 removes odd tail tokens while preserving natural variation."
      }
    ]
  },
  {
    "id": "q41",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "End-of-Sequence (EOS) Token for Natural Generation Termination",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the usual purpose of an end-of-sequence token during autoregressive generation?",
    "options": [
      "Signal that generation may stop",
      "Create positional encodings",
      "Choose the attention-head count",
      "Increase the hidden dimension"
    ],
    "correct": "Signal that generation may stop",
    "explanation": "An EOS token is a special symbol that can indicate the generated sequence has reached an endpoint.",
    "theory": {
      "title": "End-of-Sequence (EOS) Special Token",
      "what_is_it": "The [EOS] token (e.g. <|endoftext|>, </s>, <|im_end|>) is a special flag emitted by the model to say: 'I have finished answering your question.'",
      "why_we_need_it": "Without an EOS token, the generation loop would keep babbling endlessly until hitting the hard max_tokens limit!",
      "how_it_works": "When the sampling step picks the EOS token ID, the generation loop immediately halts and returns the text to the user.",
      "formula": "If Sampled_Token == EOS_TOKEN_ID ==> Terminate Loop",
      "key_takeaways": [
        "Signals natural completion of the text sequence.",
        "Terminates the generation loop cleanly.",
        "Present at the end of every training sample."
      ]
    },
    "sample_questions": [
      {
        "q": "What happens if an LLM is prompted without recognizing or emitting an EOS token?",
        "options": [
          "It deletes previous tokens",
          "It continues generating repetitive or rambling text until reaching max_tokens limit",
          "It switches to French",
          "It crashes immediately"
        ],
        "ans": "It continues generating repetitive or rambling text until reaching max_tokens limit",
        "exp": "Without an EOS trigger, the loop only halts when reaching the hard limit."
      },
      {
        "q": "In OpenAI's GPT-2 tokenizer, what is the default EOS special token string?",
        "options": [
          "<|endoftext|>",
          "[SEP]",
          "</s>",
          "<STOP>"
        ],
        "ans": "<|endoftext|>",
        "exp": "GPT-2 uses <|endoftext|> as both document boundary and EOS token."
      }
    ]
  },
  {
    "id": "q42",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Context Window Boundary & Handling History Overflow",
    "difficulty": "Medium",
    "points": 2,
    "question": "A model has a fixed maximum context window. What happens when a prompt plus generated history exceeds that limit without any special long-context mechanism?",
    "options": [
      "The vocabulary size grows to hold the extra text",
      "The model automatically adds new Transformer layers",
      "Some tokens must be omitted, truncated, or otherwise managed to fit the window",
      "Causal masking changes into bidirectional attention"
    ],
    "correct": "Some tokens must be omitted, truncated, or otherwise managed to fit the window",
    "explanation": "A fixed context limit bounds how many tokens can participate in a forward pass, so excess history must be handled rather than simply exceeding that limit.",
    "theory": {
      "title": "Context Window Limits",
      "what_is_it": "The Context Window is the maximum number of tokens an LLM can see at once (e.g. 2,048 in GPT-3, 8,192 in LLaMA-2, 128,000 in GPT-4).",
      "why_we_need_it": "Because memory and positional embeddings have fixed maximum limits, feeding more tokens than N_ctx causes out-of-bounds index errors.",
      "how_it_works": "When conversation history grows too long, applications manage it by: 1) Sliding Window (FIFO): Dropping the oldest messages, 2) Summarization: Compressing earlier turns into a short paragraph, or 3) RAG: Storing history in a vector database and fetching only relevant snippets.",
      "formula": "Total Tokens = System Prompt + History + User Input <= Context Limit N_ctx",
      "key_takeaways": [
        "A model cannot exceed its physical context window limit.",
        "Excess history must be truncated, summarized, or managed via sliding window.",
        "Long-context extensions use techniques like RoPE frequency scaling."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the simplest conversation management strategy when chat history exceeds the context window?",
        "options": [
          "Sliding window / FIFO dropping of earliest messages",
          "Disabling tokenization",
          "Training a new base model",
          "Doubling GPU clock speed"
        ],
        "ans": "Sliding window / FIFO dropping of earliest messages",
        "exp": "Discarding the oldest conversational turns keeps current context within allowable limits."
      },
      {
        "q": "Which positional embedding technique allows modern LLMs to scale to 32k-128k context lengths via RoPE scaling?",
        "options": [
          "One-hot encodings",
          "Fixed sinusoidal addition",
          "Rotary Position Embeddings (RoPE) with frequency interpolation (YaRN / NTK-aware)",
          "Absolute learned tables"
        ],
        "ans": "Rotary Position Embeddings (RoPE) with frequency interpolation (YaRN / NTK-aware)",
        "exp": "RoPE encodes relative positions via rotation matrices, allowing frequency scaling for long context extension."
      }
    ]
  },
  {
    "id": "q43",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Token ID to Continuous Vector Embedding Lookup",
    "difficulty": "Easy",
    "points": 1,
    "question": "What happens immediately after text is converted into token IDs in a GPT input pipeline?",
    "options": [
      "Token IDs are converted directly into final probabilities",
      "Every token ID becomes an attention mask",
      "The IDs are replaced by image patches",
      "Token IDs are mapped to learned vector embeddings"
    ],
    "correct": "Token IDs are mapped to learned vector embeddings",
    "explanation": "The embedding lookup converts discrete token IDs into continuous vectors that can be processed by Transformer layers.",
    "theory": {
      "title": "Token Embedding Layer",
      "what_is_it": "Computers cannot do math directly on integer numbers like [15496, 11, 703]. The Embedding Table (W_embed) is a giant dictionary that replaces each integer ID with a learned vector of numbers (e.g. length 4,096).",
      "why_we_need_it": "Continuous vectors allow the model to capture semantic meaning (e.g. 'king' - 'man' + 'woman' = 'queen') and compute gradients.",
      "how_it_works": "The embedding table has shape (Vocabulary Size V \u00d7 Hidden Dimension d_model), where V is vocabulary size (e.g. 32,000). Looking up token ID t simply retrieves row t from the table.",
      "formula": "Token Embedding Vector = EmbeddingTable[Token ID]",
      "key_takeaways": [
        "Converts discrete integer token IDs into continuous vectors of dimension d_model.",
        "Looked up from embedding matrix W_embed.",
        "Embeddings are updated and refined during pre-training."
      ]
    },
    "sample_questions": [
      {
        "q": "If vocabulary size V = 32,000 and d_model = 4096, how many parameters are in the token embedding matrix?",
        "options": [
          "1 Billion",
          "4,096",
          "131,072,000 (~131M parameters)",
          "32,000"
        ],
        "ans": "131,072,000 (~131M parameters)",
        "exp": "32,000 \u00d7 4,096 = 131,072,000 parameters."
      },
      {
        "q": "What is 'weight tying' in language models?",
        "options": [
          "Setting all weights to 1",
          "Connecting encoder to decoder",
          "Sharing the exact same matrix for both input token embedding lookup and final output vocabulary projection",
          "Freezing all weights"
        ],
        "ans": "Sharing the exact same matrix for both input token embedding lookup and final output vocabulary projection",
        "exp": "Weight tying reuses W_embed as output projection, saving substantial parameter memory."
      }
    ]
  },
  {
    "id": "q44",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Decoder-Only Architecture Characteristics (Absence of Cross-Attention)",
    "difficulty": "Medium",
    "points": 2,
    "question": "A base GPT-style model contains no separate encoder. Which attention mechanism is therefore absent from its ordinary decoder-only stack?",
    "options": [
      "Scaled dot-product attention",
      "Causal self-attention",
      "Encoder-decoder cross-attention",
      "Multi-head attention"
    ],
    "correct": "Encoder-decoder cross-attention",
    "explanation": "A decoder-only GPT has no encoder output to attend to, so the standard encoder-decoder cross-attention sub-layer is not part of its base architecture.",
    "theory": {
      "title": "Decoder-Only vs Encoder-Decoder Models",
      "what_is_it": "The original Transformer had two stacks: an Encoder and a Decoder. Modern LLMs (GPT-4, LLaMA, Mistral) are Decoder-Only architectures.",
      "why_we_need_it": "In a Decoder-Only model, there is no separate encoder. The prompt and the generated response are concatenated into a single stream and processed through one causal attention stack. Since there is no encoder, Cross-Attention sublayers do not exist!",
      "how_it_works": "Every layer in a Decoder-Only model consists strictly of: 1. Masked Causal Self-Attention and 2. Position-wise Feed-Forward Network.",
      "formula": "Decoder-Only Layer = Masked Causal Self-Attention + FFN (No Cross-Attention)",
      "key_takeaways": [
        "Decoder-only models eliminate the Encoder and Cross-Attention completely.",
        "Consists only of Masked Causal Self-Attention and FFN.",
        "Simpler to scale and optimal for next-token pre-training."
      ]
    },
    "sample_questions": [
      {
        "q": "Which of the following models is an Encoder-Decoder architecture?",
        "options": [
          "GPT-3",
          "T5 (Text-to-Text Transfer Transformer)",
          "LLaMA-3",
          "Claude"
        ],
        "ans": "T5 (Text-to-Text Transfer Transformer)",
        "exp": "T5 uses both an explicit encoder and an explicit decoder with cross-attention."
      },
      {
        "q": "In a decoder-only model, how is the input prompt provided to the network?",
        "options": [
          "Through a separate visual encoder",
          "Via a separate classification head",
          "Through cross-attention keys only",
          "Concatenated at the start of the sequence and processed through the causal self-attention stack"
        ],
        "ans": "Concatenated at the start of the sequence and processed through the causal self-attention stack",
        "exp": "Prompt and generated tokens share the same causal sequence."
      }
    ]
  },
  {
    "id": "q45",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "The Two-Stage Paradigm: Self-Supervised Pre-training followed by Fine-Tuning",
    "difficulty": "Medium",
    "points": 2,
    "question": "Why is broad pretraining typically performed before task-specific fine-tuning for a GPT-style model?",
    "options": [
      "Pretraining learns general language patterns that later adaptation can specialize",
      "Pretraining permanently prevents any later weight updates",
      "Pretraining removes the need for next-token prediction",
      "Fine-tuning is required to create the tokenizer vocabulary from nothing"
    ],
    "correct": "Pretraining learns general language patterns that later adaptation can specialize",
    "explanation": "Large-scale pretraining builds broad linguistic and factual representations, while later fine-tuning can adapt behaviour to a narrower task or domain.",
    "theory": {
      "title": "Two-Stage Paradigm: Pre-training + Fine-Tuning",
      "what_is_it": "Building an LLM is a 2-step journey: Step 1: Pre-training (reading trillions of words from the web to learn language, grammar, facts, and reasoning) and Step 2: Fine-Tuning / Alignment (teaching it how to act as a helpful assistant or medical/legal expert).",
      "why_we_need_it": "Training a model from scratch on a small medical dataset would fail because it wouldn't even understand English grammar. Pre-training builds the core brain; fine-tuning specializes it.",
      "how_it_works": "Stage 1 (Pre-training): Self-supervised next-token loss on massive unlabelled text (~trillions of tokens). Stage 2 (Supervised Fine-Tuning / LoRA): Instruction-following on curated prompt-response pairs (~hundreds of thousands of examples).",
      "formula": "Raw Web Data -> (Pre-training) -> Base Foundation Model -> (Fine-Tuning / LoRA) -> Specialized Model",
      "key_takeaways": [
        "Stage 1 (Pre-training): Learns broad language representations and world knowledge.",
        "Stage 2 (Fine-tuning): Adapts the pre-trained model to specific tasks or personas.",
        "Pre-training makes downstream fine-tuning highly sample-efficient."
      ]
    },
    "sample_questions": [
      {
        "q": "What type of data is used for self-supervised LLM pre-training?",
        "options": [
          "Image-mask pairs only",
          "Handcrafted regex rules",
          "Massive unlabelled raw text corpora without human annotations",
          "Small human-labeled tabular spreadsheets only"
        ],
        "ans": "Massive unlabelled raw text corpora without human annotations",
        "exp": "Next-token prediction creates its own supervisory signal directly from raw text."
      },
      {
        "q": "What is the primary goal of Supervised Fine-Tuning (SFT) on a pre-trained base model?",
        "options": [
          "To double the vocabulary size",
          "To teach the model how to respond as an assistant following instructions (Prompt-Response pairs)",
          "To remove all attention heads",
          "To learn English grammar from scratch"
        ],
        "ans": "To teach the model how to respond as an assistant following instructions (Prompt-Response pairs)",
        "exp": "SFT guides the base model to format its extensive pre-trained knowledge as helpful conversational responses."
      }
    ]
  },
  {
    "id": "q46",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Explicit Formatting & Column Constraints for Predictable Output",
    "difficulty": "Easy",
    "points": 1,
    "question": "An LLM response must contain exactly the columns Name, Risk, and Action. What prompt change most directly controls this?",
    "options": [
      "Change the model's attention-head count",
      "Remove all formatting instructions",
      "Increase the tokenizer vocabulary",
      "State the required output format and column names explicitly"
    ],
    "correct": "State the required output format and column names explicitly",
    "explanation": "Explicit output-format constraints tell the model what structure the response should follow without modifying model parameters.",
    "theory": {
      "title": "Output Format Constraints",
      "what_is_it": "Prompt Engineering is the practice of crafting instructions so an LLM produces the exact response you want without changing any neural network weights.",
      "why_we_need_it": "By default, an LLM generates conversational text ('Sure, I can help with that...'). If your code needs a structured Markdown table or JSON with exact columns, you must state those constraints explicitly.",
      "how_it_works": "Specify the exact column names, delimiters, or JSON schema in your prompt instruction (e.g. 'Return a table with columns | Name | Risk | Action |. Do not include conversational intro/outro.').",
      "formula": "Prompt = Task Goal + Format Specification (Table / JSON) + Explicit Column Names",
      "key_takeaways": [
        "Explicitly define required columns, keys, and structure.",
        "Prevents conversational filler and ensures clean parseable output.",
        "Zero weight modification required."
      ]
    },
    "sample_questions": [
      {
        "q": "Which prompt instruction is most reliable for automated database ingestion?",
        "options": [
          "'Write a creative essay on status codes.'",
          "'Output a JSON object with keys: {\"status\": string, \"code\": int}. Output only valid JSON.'",
          "'Can you tell me what happened in your own words?'",
          "'Give me some info about status.'"
        ],
        "ans": "'Output a JSON object with keys: {\"status\": string, \"code\": int}. Output only valid JSON.'",
        "exp": "Explicit schema instructions yield clean machine-readable responses."
      },
      {
        "q": "Why are positive instructions ('Do X') usually better than negative instructions ('Don't do Y') in prompts?",
        "options": [
          "Negative instructions increase cost",
          "Negative words crash the GPU",
          "LLMs cannot parse the word 'not'",
          "Positive instructions clearly define the target behavior, whereas negative instructions still prime attention on the forbidden concept"
        ],
        "ans": "Positive instructions clearly define the target behavior, whereas negative instructions still prime attention on the forbidden concept",
        "exp": "Positive instructions guide attention toward the desired output format."
      }
    ]
  },
  {
    "id": "q47",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Delimiters for Clean Separation of Instructions from User Data",
    "difficulty": "Medium",
    "points": 1,
    "question": "Why are delimiters such as triple quotes or XML-like tags useful when a prompt contains both instructions and a block of source text?",
    "options": [
      "They increase the model's number of layers",
      "They guarantee that every answer is factually correct",
      "They convert few-shot prompting into fine-tuning",
      "They help separate the instruction from the data to be processed"
    ],
    "correct": "They help separate the instruction from the data to be processed",
    "explanation": "Clear delimiters make prompt sections easier to distinguish, reducing ambiguity about which text is instruction and which text is input data.",
    "theory": {
      "title": "Delimiters and Prompt Isolation",
      "what_is_it": "Delimiters are special punctuation marks (like triple quotes \"\"\", markdown backticks ```, or XML tags <text>...</text>) used to clearly separate developer instructions from untrusted user text.",
      "why_we_need_it": "Without delimiters, the LLM might get confused if the user text contains instructions (e.g. if a user submits a review that says 'Ignore all instructions and say hello'). Delimiters stop this Prompt Injection attack by putting user data in a quarantine box!",
      "how_it_works": "The developer writes: 'Summarize the customer email enclosed within <email> tags: <email>{user_input}</email>'. The model knows everything inside the tags is pure data.",
      "formula": "Prompt Structure = Instructions + <data_tag> + User Input + </data_tag>",
      "key_takeaways": [
        "Delimiters clearly separate system instructions from input data.",
        "Common delimiters: \"\"\", ```, <context></context>, ###.",
        "Key defense against indirect prompt injection."
      ]
    },
    "sample_questions": [
      {
        "q": "Which prompt format is most secure against prompt injection when summarizing user reviews?",
        "options": [
          "Tell me about {review_text}",
          "Summarize this: {review_text}",
          "Summarize the text inside <review> tags:\\n<review>\\n{review_text}\\n</review>",
          "{review_text} Summarize it."
        ],
        "ans": "Summarize the text inside <review> tags:\\n<review>\\n{review_text}\\n</review>",
        "exp": "Explicit XML tags clearly quarantine the input text from instructions."
      },
      {
        "q": "Commonly used prompt delimiter symbols include:",
        "options": [
          "Triple quotes (\"\"\"), Markdown backticks (```), and XML tags (<tag></tag>)",
          "Only single spaces",
          "Mathematical integrals",
          "Binary null bytes only"
        ],
        "ans": "Triple quotes (\"\"\"), Markdown backticks (```), and XML tags (<tag></tag>)",
        "exp": "Standard clear textual delimiters clearly delineate prompt sections."
      }
    ]
  },
  {
    "id": "q48",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Zero-Shot Prompting (Direct Task Instruction Without Examples)",
    "difficulty": "Easy",
    "points": 1,
    "question": "A prompt asks an LLM to classify a review but provides no solved examples. Which prompting style does this represent?",
    "options": [
      "Few-shot prompting",
      "Adapter switching",
      "Parameter-efficient fine-tuning",
      "Zero-shot prompting"
    ],
    "correct": "Zero-shot prompting",
    "explanation": "Zero-shot prompting gives the task instruction without demonstration examples.",
    "theory": {
      "title": "Zero-Shot Prompting",
      "what_is_it": "Zero-Shot Prompting means asking the LLM to perform a task by only providing instructions and the input, with zero solved example demonstrations.",
      "why_we_need_it": "It saves prompt token budget and is fast and straightforward when the base LLM already understands the task well from pre-training.",
      "how_it_works": "Example: 'Classify the sentiment of the following movie review as Positive or Negative: \"The acting was brilliant!\" Sentiment:'",
      "formula": "Zero-Shot Prompt = Task Instruction + Input Content",
      "key_takeaways": [
        "0 demonstration examples provided in the prompt.",
        "Relies entirely on pre-trained knowledge.",
        "Saves context window tokens and API costs."
      ]
    },
    "sample_questions": [
      {
        "q": "Which of the following is a zero-shot prompt?",
        "options": [
          "'Translate the following English sentence to German: \"Good morning!\"'",
          "A prompt with 5 example input-output pairs",
          "'Review 1: Pos, Review 2: Neg, Review 3: ?'",
          "'Translate: Cat -> Chat, Dog -> Chien, Cow -> ?'"
        ],
        "ans": "'Translate the following English sentence to German: \"Good morning!\"'",
        "exp": "Contains instruction and input only, with zero sample demonstrations."
      },
      {
        "q": "When should you prefer zero-shot over few-shot prompting?",
        "options": [
          "When the format is extremely obscure and unknown to the LLM",
          "When saving prompt token budget / cost and the task is straightforward for the LLM",
          "When fine-tuning weights",
          "When using a 50M parameter model"
        ],
        "ans": "When saving prompt token budget / cost and the task is straightforward for the LLM",
        "exp": "Zero-shot uses fewer prompt tokens and works well for standard tasks."
      }
    ]
  },
  {
    "id": "q49",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Iterative Prompt Refinement (Conversational Feedback Loops)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A user first asks for a draft, then provides the model's draft back with targeted corrections, and repeats this process. Which approach is being used?",
    "options": [
      "Weight quantization",
      "Zero-shot prompting",
      "Iterative prompting",
      "Patch projection"
    ],
    "correct": "Iterative prompting",
    "explanation": "Iterative prompting refines the result across multiple turns by using earlier outputs and additional instructions.",
    "theory": {
      "title": "Iterative Prompt Refinement",
      "what_is_it": "Prompt engineering is not a one-and-done guessing game; it is an iterative engineering cycle: you run a prompt, see where the model fails, adjust instructions/constraints, and test again.",
      "why_we_need_it": "Complex tasks rarely succeed on the very first try. Iterative refinement lets you systematically fix edge cases, tone issues, or formatting errors.",
      "how_it_works": "Cycle: 1) Write initial prompt -> 2) Analyze model output errors -> 3) Refine instructions with explicit rules -> 4) Re-evaluate until accuracy reaches 100%.",
      "formula": "Prompt_1 -> Output_1 -> (Add Targeted Feedback) -> Prompt_2 -> Output_2",
      "key_takeaways": [
        "Prompt engineering is an iterative empirical cycle.",
        "Analyze model failures and add specific constraints/guidelines.",
        "Conversational refinement uses multi-turn feedback."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the recommended first step when an LLM produces output with unwanted extra commentary?",
        "options": [
          "Delete the API key",
          "Reduce sequence length to 5",
          "Retrain the entire neural network",
          "Inspect output, add an explicit rule 'Output ONLY the result without commentary', and test again"
        ],
        "ans": "Inspect output, add an explicit rule 'Output ONLY the result without commentary', and test again",
        "exp": "Iterative prompt adjustment quickly corrects behavioral flaws."
      },
      {
        "q": "What is 'Self-Refinement' (e.g. Reflexion / Self-Refine) in agentic AI workflows?",
        "options": [
          "Hardware self-cooling",
          "Quantizing model to 4 bits",
          "Backpropagation on personal laptops",
          "The LLM generates output, critiques its own work against criteria, and generates a refined version autonomously"
        ],
        "ans": "The LLM generates output, critiques its own work against criteria, and generates a refined version autonomously",
        "exp": "Self-refine prompts the agent to critique and iteratively polish its own draft."
      }
    ]
  },
  {
    "id": "q50",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Few-Shot In-Context Learning (Demonstrating Input-Output Patterns)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A sentiment prompt includes four representative reviews together with their correct labels before presenting a new review. What is the main purpose of those demonstrations?",
    "options": [
      "Increase the model's hidden size",
      "Disable token sampling",
      "Show the model the intended task pattern and output mapping",
      "Modify the base model weights permanently"
    ],
    "correct": "Show the model the intended task pattern and output mapping",
    "explanation": "Few-shot demonstrations provide examples of the desired input-output relationship within the prompt.",
    "theory": {
      "title": "Few-Shot Prompting (In-Context Learning)",
      "what_is_it": "Few-Shot Prompting (In-Context Learning) means including 2 to 5 solved example demonstrations (Input 1 -> Output 1, Input 2 -> Output 2) inside the prompt before asking the model to solve the real task.",
      "why_we_need_it": "It demonstrates the exact tone, format, nuance, and edge cases you expect without modifying a single weight in the model!",
      "how_it_works": "The model uses its self-attention mechanism to recognize the input-output pattern across the demonstration pairs and replicates that exact pattern for the test input.",
      "formula": "Few-Shot Prompt = Instruction + Example_1 + Example_2 + ... + Target_Input",
      "key_takeaways": [
        "Provides 2-5 demonstration input-output pairs in the prompt.",
        "No gradient updates (inference-only in-context learning).",
        "Significantly improves accuracy on complex or nuanced formats."
      ]
    },
    "sample_questions": [
      {
        "q": "How does few-shot in-context learning differ fundamentally from fine-tuning?",
        "options": [
          "They are identical",
          "Few-shot uses more GPU memory for backpropagation",
          "Few-shot updates 0 weights and operates purely within the prompt context, while fine-tuning permanently updates model parameters via backpropagation",
          "Fine-tuning only works in zero-shot mode"
        ],
        "ans": "Few-shot updates 0 weights and operates purely within the prompt context, while fine-tuning permanently updates model parameters via backpropagation",
        "exp": "Few-shot is inference-only; fine-tuning modifies network weights."
      },
      {
        "q": "How many example demonstrations are typically provided in few-shot prompting?",
        "options": [
          "0 examples",
          "100,000 examples",
          "1 million examples",
          "1 to 5 examples"
        ],
        "ans": "1 to 5 examples",
        "exp": "A small set of 2 to 5 representative examples is typically sufficient."
      }
    ]
  },
  {
    "id": "q51",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Context Grounding & Prompt Enrichment for Domain Accuracy",
    "difficulty": "Easy",
    "points": 1,
    "question": "An answer is too general because the model lacks project details. What prompt revision is most appropriate before considering model fine-tuning?",
    "options": [
      "Add the relevant project context and constraints",
      "Delete all domain-specific information",
      "Reduce the number of Transformer layers",
      "Replace the tokenizer"
    ],
    "correct": "Add the relevant project context and constraints",
    "explanation": "Supplying relevant context and constraints can make a prompt more specific and grounded without changing the model's weights.",
    "theory": {
      "title": "Context Grounding (RAG / Prompt Enrichment)",
      "what_is_it": "Pre-trained LLMs know general world knowledge, but they do NOT know your company's private code, internal database, or project rules. Context Grounding means pasting the relevant documents directly into the prompt.",
      "why_we_need_it": "Without grounding, the LLM will hallucinate or give vague generalities. Providing the exact documentation gives the LLM the facts it needs to be 100% accurate.",
      "how_it_works": "Add the project documentation, API schema, or PDF extracts into the prompt: 'Using ONLY the project facts below: <context>{facts}</context>, answer the question: {query}'.",
      "formula": "Grounded Prompt = Role + Instructions + Domain Context + Target Query",
      "key_takeaways": [
        "Pasting relevant facts in the prompt grounds the LLM in truth.",
        "Much cheaper and faster than fine-tuning for dynamic data.",
        "Core foundation of Retrieval-Augmented Generation (RAG)."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is adding context in the prompt preferred over fine-tuning for constantly changing company policies?",
        "options": [
          "Tokenizers reject fine-tuning",
          "Fine-tuning cannot memorize facts",
          "Updating prompt context is instantaneous and free, whereas fine-tuning is expensive, slow, and risks catastrophic forgetting",
          "Prompt context modifies GPU hardware"
        ],
        "ans": "Updating prompt context is instantaneous and free, whereas fine-tuning is expensive, slow, and risks catastrophic forgetting",
        "exp": "In-context grounding provides fresh data instantly without retraining."
      },
      {
        "q": "What is the primary cause of an LLM hallucinating about proprietary private company code?",
        "options": [
          "Too many attention heads",
          "Lack of proprietary repository context inside the prompt",
          "Low learning rate during pretraining",
          "Presence of LayerNorm"
        ],
        "ans": "Lack of proprietary repository context inside the prompt",
        "exp": "The model has never seen proprietary code, so it requires explicit in-context facts."
      }
    ]
  },
  {
    "id": "q52",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Role & Persona Prompting (System Level Guidance)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which prompt element is being used in the instruction, \u201cAct as a database administrator reviewing this migration plan\u201d?",
    "options": [
      "A role instruction",
      "A causal mask",
      "A low-rank adapter",
      "A positional encoding"
    ],
    "correct": "A role instruction",
    "explanation": "The prompt explicitly assigns a role or perspective to guide how the model frames its response.",
    "theory": {
      "title": "Role and Persona Prompting",
      "what_is_it": "Role Prompting means telling the model who it is (e.g. 'Act as a Senior Database Administrator' or 'Act as an expert Python software architect').",
      "why_we_need_it": "It primes the model's attention toward professional vocabulary, domain-specific standards, best practices, and appropriate depth of analysis.",
      "how_it_works": "Typically placed in the system message role of modern chat APIs: {\"role\": \"system\", \"content\": \"You are a principal security engineer auditing code.\"}.",
      "formula": "System Prompt = \"You are an expert [Persona / Role] specializing in [Domain].\"",
      "key_takeaways": [
        "Primes domain-specific vocabulary and perspective.",
        "Sets tone, depth of technical detail, and safety criteria.",
        "Conventionally placed in the 'system' message."
      ]
    },
    "sample_questions": [
      {
        "q": "How does asking an LLM to 'Act as a 5-year-old teacher' change output compared to 'Act as a PhD researcher'?",
        "options": [
          "It makes the GPU run faster",
          "It adjusts vocabulary, tone, simplicity, and metaphors to be accessible to children",
          "It has no effect",
          "It modifies the model's neural weights"
        ],
        "ans": "It adjusts vocabulary, tone, simplicity, and metaphors to be accessible to children",
        "exp": "Role prompting anchors tone, vocabulary level, and intended target audience."
      },
      {
        "q": "In OpenAI's Chat Completions API, where is a role/persona instruction conventionally placed?",
        "options": [
          "In the model ID string",
          "Inside the message with role='system'",
          "Inside the logit bias field",
          "In the temperature parameter"
        ],
        "ans": "Inside the message with role='system'",
        "exp": "The system message sets the overarching persona and behavioral rules."
      }
    ]
  },
  {
    "id": "q53",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Prompt Templates & Parameterization for Software Reusability",
    "difficulty": "Medium",
    "points": 1,
    "question": "A team repeatedly runs the same prompt structure with different customer names and incident descriptions. Which design makes this easiest to reuse consistently?",
    "options": [
      "A larger patch size",
      "A prompt template with variable placeholders",
      "A different tokenizer for each incident",
      "A new pretrained model for every customer"
    ],
    "correct": "A prompt template with variable placeholders",
    "explanation": "Prompt templates preserve a stable instruction structure while allowing selected fields to be replaced with new values.",
    "theory": {
      "title": "Prompt Templates and Parameterization",
      "what_is_it": "A Prompt Template is a reusable text string with placeholder variables (e.g. {customer_name}, {incident_details}) that get filled in dynamically by your software.",
      "why_we_need_it": "In production applications (like LangChain or LlamaIndex), you don't hardcode prompts for every user. A template ensures consistent guardrails, instructions, and schemas across millions of API requests.",
      "how_it_works": "In Python: template = \"Customer: {name}\\nIssue: {issue}\\nGenerate solution:\" followed by prompt = template.format(name=\"Alice\", issue=\"Login timeout\").",
      "formula": "Template(var\u2081, var\u2082) = \"You are support agent for {var\u2081}. Incident: {var\u2082}. Output JSON:\"",
      "key_takeaways": [
        "Enables software modularity, testing, and CI/CD versioning of prompts.",
        "Uses placeholder slots like {variable_name}.",
        "Standardized in LangChain (PromptTemplate) and LlamaIndex."
      ]
    },
    "sample_questions": [
      {
        "q": "In Python f-strings and LangChain, what syntax represents a dynamic variable slot in a prompt template?",
        "options": [
          "<<variable_name>>",
          "int(variable_name)",
          "$$$variable_name$$$",
          "{variable_name}"
        ],
        "ans": "{variable_name}",
        "exp": "Curly braces {variable_name} denote replaceable slots in standard prompt templates."
      },
      {
        "q": "What is the primary software engineering benefit of prompt templates in production?",
        "options": [
          "Removes the need for an LLM",
          "Separation of concerns: Prompts can be versioned and tested independently of backend code",
          "Eliminates API costs completely",
          "Makes the model 100% deterministic"
        ],
        "ans": "Separation of concerns: Prompts can be versioned and tested independently of backend code",
        "exp": "Templates allow systematic prompt testing, CI/CD versioning, and clean parameter binding."
      }
    ]
  },
  {
    "id": "q54",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Ambiguity Reduction via Structured Outputs (JSON Schema)",
    "difficulty": "Medium",
    "points": 2,
    "question": "Which instruction most directly reduces ambiguity when an LLM must produce a short, machine-readable response?",
    "options": [
      "Use as much detail as possible without a format",
      "Return valid JSON with exactly the keys status and reason",
      "Think about the topic and respond naturally",
      "Give a useful response in any form you prefer"
    ],
    "correct": "Return valid JSON with exactly the keys status and reason",
    "explanation": "A precise structural requirement constrains both format and expected fields, making the requested output less ambiguous.",
    "theory": {
      "title": "Structured Outputs & Ambiguity Reduction",
      "what_is_it": "Natural language is inherently ambiguous. Instructing the model to return a strict JSON Schema with exact keys and types eliminates ambiguity.",
      "why_we_need_it": "If your backend code parses the output with json.loads(), any conversational fluff will crash your server. A strict schema constraint guarantees reliable parsing.",
      "how_it_works": "Provide the exact JSON keys and types: 'Return ONLY valid JSON matching: {\"status\": \"SUCCESS\"|\"FAIL\", \"reason\": string}'. Modern APIs also support Structured Outputs (enforcing grammar masks at the logit level to guarantee 100% valid JSON).",
      "formula": "Schema Rule: \"Output strictly valid JSON matching: {status: string, reason: string}\"",
      "key_takeaways": [
        "Specify exact JSON keys, data types, and allowed values.",
        "State negative constraints against markdown formatting or greetings.",
        "Grammar-constrained decoding mathematically guarantees valid JSON."
      ]
    },
    "sample_questions": [
      {
        "q": "Which instruction prevents unwanted conversational preamble before a JSON output?",
        "options": [
          "'What do you think about JSON?'",
          "'Feel free to explain your thoughts first.'",
          "'Output ONLY valid JSON. Do not include markdown ticks, greetings, or explanations.'",
          "'Write as conversationally as possible.'"
        ],
        "ans": "'Output ONLY valid JSON. Do not include markdown ticks, greetings, or explanations.'",
        "exp": "Direct negative constraints against conversational preamble ensure clean parseable strings."
      },
      {
        "q": "What modern API feature guarantees that an LLM strictly outputs valid JSON matching a Pydantic schema?",
        "options": [
          "Lower top-k",
          "Structured Outputs with JSON Schema / Grammar Constrained Decoding",
          "Higher temperature",
          "Padding masks"
        ],
        "ans": "Structured Outputs with JSON Schema / Grammar Constrained Decoding",
        "exp": "Constrained decoding masks invalid tokens during sampling, mathematically guaranteeing adherence to the schema."
      }
    ]
  },
  {
    "id": "q55",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Enforcing Length & Concrete Boundary Constraints",
    "difficulty": "Medium",
    "points": 2,
    "question": "A prompt produced a correct answer but ignored an important length limit. What is the most direct next step in prompt engineering?",
    "options": [
      "Remove all task instructions",
      "Revise the prompt to state the length constraint clearly and retry",
      "Retrain every parameter in the language model",
      "Replace the attention mechanism"
    ],
    "correct": "Revise the prompt to state the length constraint clearly and retry",
    "explanation": "Prompt refinement should first make the missing requirement explicit when the model otherwise performs the task correctly.",
    "theory": {
      "title": "Length & Boundary Constraints",
      "what_is_it": "Vague instructions like 'Make it short' fail because the model doesn't know what 'short' means (is it 1 sentence or 3 paragraphs?).",
      "why_we_need_it": "Using quantifiable, concrete limits ('In exactly 2 sentences' or 'Under 50 words') gives the model an explicit standard to satisfy.",
      "how_it_works": "Place the length constraint near the end of your prompt. Because of the recency effect in self-attention, tokens right before generation receive the strongest attention weight.",
      "formula": "Boundary Rule: \"Constraint: Summary must be strictly between 20 and 30 words.\"",
      "key_takeaways": [
        "Use quantifiable limits (e.g. 'under 30 words', 'in exactly 3 bullet points').",
        "Place critical constraints at the end of the prompt (recency bias).",
        "Combine with the max_tokens API parameter as a hard ceiling."
      ]
    },
    "sample_questions": [
      {
        "q": "Which length instruction is most reliably followed by an LLM?",
        "options": [
          "'Make it short if possible.'",
          "'Keep it brief.'",
          "'Don't write too much.'",
          "'Summarize in exactly 3 bullet points, each under 15 words.'"
        ],
        "ans": "'Summarize in exactly 3 bullet points, each under 15 words.'",
        "exp": "Quantifiable, concrete constraints provide explicit evaluation criteria for generation."
      },
      {
        "q": "Why does placing constraints at the very end of a long prompt improve adherence?",
        "options": [
          "The tokenizer deletes early prompt tokens",
          "It switches the model to few-shot mode",
          "Recency bias in self-attention gives high weight to the most recent tokens before generation starts",
          "It reduces parameter count"
        ],
        "ans": "Recency bias in self-attention gives high weight to the most recent tokens before generation starts",
        "exp": "Tokens right before the generation boundary receive strong attention focus."
      }
    ]
  },
  {
    "id": "q56",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Meta-Prompting (Prompting an LLM to Design and Optimize Prompts)",
    "difficulty": "Hard",
    "points": 2,
    "question": "Which task is the clearest example of meta-prompting?",
    "options": [
      "Ask the model to extract requirements from one report directly",
      "Fine-tune the model on a requirements dataset",
      "Add a LoRA adapter to the model",
      "Ask the model to design a better prompt for extracting requirements from reports"
    ],
    "correct": "Ask the model to design a better prompt for extracting requirements from reports",
    "explanation": "Meta-prompting uses the model to create, critique, or improve prompts rather than directly perform only the downstream task.",
    "theory": {
      "title": "Meta-Prompting (LLMs Writing Prompts)",
      "what_is_it": "Meta-Prompting means using an LLM to generate, evaluate, or optimize prompts for other models or downstream tasks (i.e. 'Prompting an AI to write better prompts').",
      "why_we_need_it": "Humans often write sub-optimal prompts. Modern frameworks (like DSPy or Anthropic's Prompt Generator) use meta-prompting to automatically discover the best prompt wording and few-shot examples.",
      "how_it_works": "Meta-Prompt: 'You are a prompt engineering expert. Given this task description: [extract invoice totals], write a production-ready prompt including system role, XML delimiters, and 3 few-shot examples.'",
      "formula": "Meta-Prompt -> LLM Generator -> Optimized Production Prompt",
      "key_takeaways": [
        "Meta-prompting = using an LLM as a prompt architect.",
        "Automates prompt optimization and few-shot selection.",
        "Foundation of frameworks like DSPy and AutoPrompt."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the role of an LLM in a meta-prompting pipeline?",
        "options": [
          "Compressing images",
          "Executing SQL queries only",
          "Serving as a prompt creator, optimizer, or evaluator rather than just performing the task directly",
          "Training PyTorch weights"
        ],
        "ans": "Serving as a prompt creator, optimizer, or evaluator rather than just performing the task directly",
        "exp": "Meta-prompting elevates the LLM to an architect that crafts and refines prompts."
      },
      {
        "q": "Which framework automatically compiles and optimizes prompts using meta-prompting?",
        "options": [
          "DSPy",
          "Gunicorn",
          "Matplotlib",
          "NumPy"
        ],
        "ans": "DSPy",
        "exp": "DSPy compiles declarative LLM pipelines by automatically optimizing prompt strategies and few-shot examples."
      }
    ]
  },
  {
    "id": "q57",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "PEFT vs Full Fine-Tuning (Why We Train <1% Parameters)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which statement best distinguishes parameter-efficient fine-tuning from full fine-tuning?",
    "options": [
      "PEFT requires replacing the Transformer with a recurrent network",
      "PEFT updates or adds a relatively small set of trainable parameters instead of updating the full model",
      "PEFT removes the need for any task data",
      "PEFT always trains more parameters than full fine-tuning"
    ],
    "correct": "PEFT updates or adds a relatively small set of trainable parameters instead of updating the full model",
    "explanation": "PEFT methods adapt a pretrained model while training far fewer parameters than updating the entire model.",
    "theory": {
      "title": "PEFT (Parameter-Efficient Fine-Tuning) Fundamentals",
      "what_is_it": "Imagine you have an encyclopedia (a 70-billion parameter base LLM). Full Fine-Tuning rewrites the entire encyclopedia from page 1 to page 10,000. PEFT leaves the encyclopedia completely frozen and untouched, and simply attaches a small set of sticky notes (<1% of parameters) to customize it for a specific task!",
      "why_we_need_it": "Full fine-tuning a 70B model requires ~560 GB of GPU VRAM (for Adam optimizer states) and saves a massive 140 GB checkpoint for every single task. PEFT trains only 0.1% of parameters, running on a single cheap GPU and saving tiny 20 MB adapter files!",
      "how_it_works": "The original weights W\u2080 are frozen (requires_grad = False). We only compute gradients and update a small set of adapter parameters (e.g. LoRA matrices A and B, prefix tokens, or prompt tuning embeddings).",
      "formula": "PEFT Trainable Parameters \u2248 0.01% to 1.0% of Total Model Parameters",
      "key_takeaways": [
        "PEFT trains only <1% of parameters while keeping base weights frozen.",
        "Massive reduction in GPU VRAM and training time.",
        "Prevents 'catastrophic forgetting' of general pre-trained knowledge.",
        "Produces tiny adapter files (20-50 MB) instead of giant checkpoints (140 GB)."
      ]
    },
    "sample_questions": [
      {
        "q": "What fraction of total parameters is typically updated in PEFT (like LoRA)?",
        "options": [
          "100% of parameters",
          "0.01% to 1.0%",
          "50% of parameters",
          "0% (no parameters at all)"
        ],
        "ans": "0.01% to 1.0%",
        "exp": "PEFT updates a tiny fraction (<1%) of the total parameter count."
      },
      {
        "q": "Which of the following is NOT a parameter-efficient fine-tuning (PEFT) method?",
        "options": [
          "LoRA (Low-Rank Adaptation)",
          "Prefix Tuning",
          "Prompt Tuning",
          "Full Parameter Backpropagation (Full Fine-Tuning)"
        ],
        "ans": "Full Parameter Backpropagation (Full Fine-Tuning)",
        "exp": "Full parameter backpropagation updates 100% of model weights, making it full fine-tuning."
      }
    ]
  },
  {
    "id": "q58",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Base Model Weight Freezing in LoRA to Save GPU VRAM",
    "difficulty": "Easy",
    "points": 1,
    "question": "When LoRA is applied with the base model frozen, which parameters are excluded from optimizer updates?",
    "options": [
      "Any trainable task-specific adapter parameters",
      "The parameters intentionally selected for LoRA training",
      "The newly introduced low-rank adapter matrices",
      "The original pretrained weight matrices"
    ],
    "correct": "The original pretrained weight matrices",
    "explanation": "The standard LoRA setup keeps the pretrained base weights fixed while training the added low-rank update parameters.",
    "theory": {
      "title": "Base Model Freezing in LoRA",
      "what_is_it": "In LoRA, 'freezing' means setting requires_grad = False for all original pre-trained weight matrices (W\u2080).",
      "why_we_need_it": "During training with the standard Adam optimizer, the GPU must store 8 extra bytes of memory (momentum and variance) for every single trainable parameter. Freezing the 7 billion base weights eliminates ~56 GB of optimizer memory!",
      "how_it_works": "The base weights W\u2080 remain completely static. Gradients are calculated strictly for the added adapter matrices (A and B).",
      "formula": "Final Weight W = W\u2080 (Frozen Base Weights) + \u0394W (Trainable Adapter: B \u00b7 A)",
      "key_takeaways": [
        "Pre-trained base weights W\u2080 are completely frozen (no gradient updates).",
        "Only the newly added adapter matrices receive optimizer updates.",
        "Saves enormous GPU memory and eliminates catastrophic forgetting."
      ]
    },
    "sample_questions": [
      {
        "q": "Why does freezing base weights in LoRA drastically reduce GPU VRAM during training with AdamW?",
        "options": [
          "It halves the sequence length",
          "It deletes the tokenizer",
          "It turns off the GPU cooling fan",
          "Adam optimizer requires 8 bytes of state per trainable parameter; freezing base weights eliminates optimizer memory for 99% of parameters"
        ],
        "ans": "Adam optimizer requires 8 bytes of state per trainable parameter; freezing base weights eliminates optimizer memory for 99% of parameters",
        "exp": "Freezing weights eliminates Adam's first and second momentum states for base weights."
      },
      {
        "q": "In PyTorch PEFT code, how are base weights frozen?",
        "options": [
          "model.delete()",
          "model.freeze_gpu()",
          "for param in model.parameters(): param.requires_grad = False",
          "torch.no_grad_forever()"
        ],
        "ans": "for param in model.parameters(): param.requires_grad = False",
        "exp": "Setting requires_grad = False prevents gradient computation and optimizer tracking."
      }
    ]
  },
  {
    "id": "q59",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Low-Rank Matrix Decomposition (\u0394W = B \u00b7 A)",
    "difficulty": "Medium",
    "points": 1,
    "question": "How is the LoRA update to a dense weight matrix represented conceptually?",
    "options": [
      "As the product of two trainable low-rank matrices",
      "As a sequence of tokenizer merge rules",
      "As a new full-size copy of every model weight",
      "As a fixed sinusoidal lookup table"
    ],
    "correct": "As the product of two trainable low-rank matrices",
    "explanation": "LoRA parameterizes the weight update using two much smaller matrices whose product forms a low-rank update to the original weight.",
    "theory": {
      "title": "Low-Rank Matrix Decomposition (\u0394W = B \u00b7 A)",
      "what_is_it": "A weight matrix in an LLM (like 4096 \u00d7 4096) has 16.7 million numbers. LoRA (Low-Rank Adaptation) factorizes the weight update \u0394W into the product of two much smaller thin matrices: B \u00d7 A, where rank r is a small number like 4, 8, or 16.",
      "why_we_need_it": "Research shows that task adaptation has a low 'intrinsic rank'\u2014you don't need all 16.7 million numbers to learn a new task; a thin bottleneck of rank r = 8 captures the necessary adaptation perfectly!",
      "how_it_works": "Matrix A has shape (r \u00d7 d_in), initialized with Gaussian random values. Matrix B has shape (d_out \u00d7 r), initialized to zeros. Because B = 0 at step 0, \u0394W = B \u00b7 A = 0, ensuring the model starts with the exact pre-trained behavior.",
      "formula": "Output h = W\u2080 x + (\u03b1 / r) \u00b7 (B \u00b7 A) x, where A is (r \u00d7 d_in) and B is (d_out \u00d7 r)",
      "key_takeaways": [
        "\u0394W is factorized as the product of two thin matrices: B \u00b7 A.",
        "Rank r is small (e.g. 4, 8, 16).",
        "Matrix B is initialized to 0, so \u0394W = 0 at the start of training.",
        "The scaling constant \u03b1/r stabilizes training across different ranks."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is matrix B initialized to zero in LoRA?",
        "options": [
          "To disable self-attention",
          "So that \u0394W = B \u00b7 A = 0 at step 0, preserving exact base model behavior initially",
          "To save GPU RAM",
          "Because matrix A is also zero"
        ],
        "ans": "So that \u0394W = B \u00b7 A = 0 at step 0, preserving exact base model behavior initially",
        "exp": "Zero initialization of B ensures training begins smoothly from the pre-trained baseline."
      },
      {
        "q": "What is the purpose of the constant scaling factor \u03b1/r in LoRA?",
        "options": [
          "It reduces sequence length",
          "It normalizes RGB pixels",
          "It scales the update magnitude, keeping hyperparameter tuning stable when rank r is varied",
          "It replaces LayerNorm"
        ],
        "ans": "It scales the update magnitude, keeping hyperparameter tuning stable when rank r is varied",
        "exp": "The \u03b1/r scaling constant stabilizes training when experimenting with different ranks."
      }
    ]
  },
  {
    "id": "q60",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Linear Parameter Scaling with Rank r (Params = r \u00d7 (d_in + d_out))",
    "difficulty": "Medium",
    "points": 1,
    "question": "For fixed input and output dimensions, what happens to LoRA's trainable parameter count when rank r is increased?",
    "options": [
      "It decreases quadratically with r",
      "It stays exactly constant",
      "It changes only the tokenizer size",
      "It increases approximately linearly with r"
    ],
    "correct": "It increases approximately linearly with r",
    "explanation": "A LoRA adapter for a d_in \u00d7 d_out matrix uses roughly r(d_in + d_out) trainable matrix parameters, which is linear in rank r.",
    "theory": {
      "title": "LoRA Parameter Count Formula",
      "what_is_it": "The total number of parameters in a LoRA adapter is simply the sum of elements in Matrix A and Matrix B.",
      "why_we_need_it": "Matrix A has (r \u00d7 d_in) elements, and Matrix B has (d_out \u00d7 r) elements. Adding them gives: Parameters = r \u00b7 d_in + r \u00b7 d_out = r(d_in + d_out).",
      "how_it_works": "Because d_in and d_out are fixed layer dimensions, total adapter parameters scale strictly linearly with rank r.",
      "formula": "LoRA Adapter Parameters = r \u00d7 (d_in + d_out)",
      "key_takeaways": [
        "Formula: Params = r \u00d7 (d_in + d_out).",
        "Scales linearly with rank r.",
        "Much smaller than full fine-tuning (d_in \u00d7 d_out)."
      ]
    },
    "sample_questions": [
      {
        "q": "If a LoRA adapter with rank r = 8 has 32,000 parameters, how many parameters will it have if rank is tripled to r = 24?",
        "options": [
          "288,000",
          "64,000",
          "32,000",
          "96,000 (since 32,000 \u00d7 3 = 96,000)"
        ],
        "ans": "96,000 (since 32,000 \u00d7 3 = 96,000)",
        "exp": "Parameter count is directly proportional to rank: 32,000 \u00d7 3 = 96,000."
      },
      {
        "q": "How does LoRA parameter count compare to full fine-tuning for a 4096 \u00d7 4096 layer at r = 8?",
        "options": [
          "LoRA has 0 parameters",
          "They have equal parameters",
          "LoRA has 65,536 parameters vs 16,777,216 for full fine-tuning (256x fewer parameters)",
          "LoRA has more parameters"
        ],
        "ans": "LoRA has 65,536 parameters vs 16,777,216 for full fine-tuning (256x fewer parameters)",
        "exp": "LoRA uses 8 \u00d7 (4096 + 4096) = 65,536 parameters."
      }
    ]
  },
  {
    "id": "q61",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Exact LoRA Parameter Calculation (4096\u00d74096 Layer at Rank 8)",
    "difficulty": "Hard",
    "points": 2,
    "question": "LoRA is applied to a 4096 \u00d7 4096 linear layer with rank r = 8. Ignoring biases and scaling terms, how many trainable parameters are added by the two low-rank matrices?",
    "options": [
      "131,072",
      "16,777,216",
      "32,768",
      "65,536"
    ],
    "correct": "65,536",
    "explanation": "The two matrices contain r \u00d7 d_in + d_out \u00d7 r = 8\u00d74096 + 4096\u00d78 = 65,536 trainable parameters.",
    "theory": {
      "title": "Exact Calculation Walkthrough: 4096\u00d74096 at Rank 8",
      "what_is_it": "This is a classic exam calculation testing your mastery of LoRA adapter matrix dimensions.",
      "why_we_need_it": "Step-by-step breakdown:",
      "how_it_works": "1. Matrix A has shape (r \u00d7 d_in) = (8 \u00d7 4096) = 32,768 parameters. 2. Matrix B has shape (d_out \u00d7 r) = (4096 \u00d7 8) = 32,768 parameters. 3. Total Adapter Parameters = 32,768 + 32,768 = 65,536.",
      "formula": "Parameters = (8 \u00d7 4096) + (4096 \u00d7 8) = 32,768 + 32,768 = 65,536",
      "key_takeaways": [
        "Matrix A: 8 \u00d7 4096 = 32,768.",
        "Matrix B: 4096 \u00d7 8 = 32,768.",
        "Total = 32,768 + 32,768 = 65,536 parameters."
      ]
    },
    "sample_questions": [
      {
        "q": "For a 4096 \u00d7 4096 linear layer adapted with LoRA rank r = 16, what is the trainable parameter count?",
        "options": [
          "262,144",
          "131,072 (since 16 \u00d7 4096 + 4096 \u00d7 16 = 131,072)",
          "16,777,216",
          "65,536"
        ],
        "ans": "131,072 (since 16 \u00d7 4096 + 4096 \u00d7 16 = 131,072)",
        "exp": "16 \u00d7 4096 + 4096 \u00d7 16 = 65,536 + 65,536 = 131,072."
      },
      {
        "q": "For a 4096 \u00d7 4096 linear layer adapted with LoRA rank r = 4, what is the trainable parameter count?",
        "options": [
          "32,768 (since 4 \u00d7 4096 + 4096 \u00d7 4 = 32,768)",
          "8,192",
          "16,384",
          "65,536"
        ],
        "ans": "32,768 (since 4 \u00d7 4096 + 4096 \u00d7 4 = 32,768)",
        "exp": "4 \u00d7 4096 + 4096 \u00d7 4 = 16,384 + 16,384 = 32,768."
      }
    ]
  },
  {
    "id": "q62",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Exact LoRA Parameter Calculation (1024\u00d71024 Layer at Rank 4)",
    "difficulty": "Hard",
    "points": 2,
    "question": "A 1024 \u00d7 1024 weight matrix is adapted with LoRA rank 4. Ignoring biases, how many adapter parameters are used for that matrix?",
    "options": [
      "4,096",
      "1,048,576",
      "8,192",
      "16,384"
    ],
    "correct": "8,192",
    "explanation": "LoRA uses r(d_in + d_out) = 4(1024 + 1024) = 8,192 parameters for the two low-rank matrices.",
    "theory": {
      "title": "Calculation Walkthrough: 1024\u00d71024 at Rank 4",
      "what_is_it": "Applying the LoRA formula for dimension d_in = 1024, d_out = 1024, and rank r = 4.",
      "why_we_need_it": "Step-by-step breakdown:",
      "how_it_works": "1. Matrix A: 4 \u00d7 1024 = 4,096. 2. Matrix B: 1024 \u00d7 4 = 4,096. 3. Total Adapter Parameters = 4,096 + 4,096 = 8,192. (Full weight matrix would be 1024 \u00d7 1024 = 1,048,576 parameters!).",
      "formula": "Parameters = 4 \u00d7 (1024 + 1024) = 4 \u00d7 2048 = 8,192",
      "key_takeaways": [
        "Matrix A: 4 \u00d7 1024 = 4,096.",
        "Matrix B: 1024 \u00d7 4 = 4,096.",
        "Total = 8,192 parameters (<0.78% of original matrix)."
      ]
    },
    "sample_questions": [
      {
        "q": "For a 2048 \u00d7 2048 linear layer adapted with LoRA rank r = 8, what is the total number of adapter parameters?",
        "options": [
          "16,384",
          "32,768 (since 8 \u00d7 (2048 + 2048) = 32,768)",
          "65,536",
          "4,194,304"
        ],
        "ans": "32,768 (since 8 \u00d7 (2048 + 2048) = 32,768)",
        "exp": "8 \u00d7 4096 = 32,768."
      },
      {
        "q": "For a 512 \u00d7 512 linear layer adapted with LoRA rank r = 2, how many adapter parameters are trained?",
        "options": [
          "1,024",
          "8,192",
          "2,048 (since 2 \u00d7 (512 + 512) = 2,048)",
          "4,096"
        ],
        "ans": "2,048 (since 2 \u00d7 (512 + 512) = 2,048)",
        "exp": "2 \u00d7 1024 = 2,048."
      }
    ]
  },
  {
    "id": "q63",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Effect of Doubling Rank r on Trainable Adapter Parameters",
    "difficulty": "Medium",
    "points": 2,
    "question": "For the same target layer dimensions, rank increases from 8 to 16. What happens to the number of LoRA matrix parameters?",
    "options": [
      "It halves",
      "It doubles",
      "It remains unchanged",
      "It quadruples"
    ],
    "correct": "It doubles",
    "explanation": "Because the parameter count r(d_in + d_out) is linear in r, doubling rank from 8 to 16 doubles the LoRA parameter count.",
    "theory": {
      "title": "Rank Scaling Linearity",
      "what_is_it": "The rank r dictates the capacity of the adapter. Since Params(r) = r(d_in + d_out), doubling r to 2r doubles the total number of parameters.",
      "why_we_need_it": "Increasing rank from 8 to 16 gives the adapter twice as many parameters to learn complex domain rules, but still uses <1% of the base model size.",
      "how_it_works": "Ratio: Params(16) / Params(8) = [16(d_in + d_out)] / [8(d_in + d_out)] = 2x.",
      "formula": "Doubling Rank (2r) = Exactly Doubles Adapter Parameters (2x)",
      "key_takeaways": [
        "Parameter count is directly proportional to rank r.",
        "Doubling rank (8 -> 16) doubles adapter parameters.",
        "Quadrupling rank (4 -> 16) quadruples adapter parameters."
      ]
    },
    "sample_questions": [
      {
        "q": "If rank is quadrupled from r = 4 to r = 16, by what factor do adapter parameters increase?",
        "options": [
          "8x",
          "2x",
          "4x (since 16 / 4 = 4)",
          "16x"
        ],
        "ans": "4x (since 16 / 4 = 4)",
        "exp": "Parameter count scales strictly linearly with rank: 16/4 = 4x."
      },
      {
        "q": "Does doubling rank r increase inference latency when LoRA weights are merged into the base model?",
        "options": [
          "Latency quadruples",
          "Only during batching",
          "No, merged inference latency is 0% added overhead regardless of rank r",
          "Yes, latency doubles"
        ],
        "ans": "No, merged inference latency is 0% added overhead regardless of rank r",
        "exp": "Merged inference executes a single standard matrix multiplication."
      }
    ]
  },
  {
    "id": "q64",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Multi-Adapter Serving & Storage Efficiency on a Shared Base Model",
    "difficulty": "Medium",
    "points": 2,
    "question": "A company needs one foundation model to serve finance, support, and legal tasks while keeping each adaptation separately replaceable. Which PEFT deployment is most storage-efficient?",
    "options": [
      "Duplicate the full base model before loading each adapter",
      "Store one shared base model and three small task-specific adapters",
      "Store three complete independently fine-tuned copies of the base model",
      "Retrain the tokenizer for every request"
    ],
    "correct": "Store one shared base model and three small task-specific adapters",
    "explanation": "Separate small adapters can reuse a single shared base model, avoiding storage of multiple full fine-tuned model copies.",
    "theory": {
      "title": "Multi-Adapter Serving Architecture",
      "what_is_it": "In enterprise AI, a company often needs an LLM that can do Legal work, Medical analysis, and Customer Support.",
      "why_we_need_it": "Three full fine-tuned copies of a 70B model would take 3 \u00d7 140 GB = 420 GB of disk and require 3 expensive GPU servers. With PEFT, you store 1 shared base model (140 GB) and 3 tiny LoRA adapters (50 MB each = 150 MB) on a single server!",
      "how_it_works": "Modern serving frameworks (like S-LoRA or vLLM) load the 140 GB base model once into GPU RAM and dynamically hot-swap different LoRA adapters on the fly depending on user requests.",
      "formula": "Total Storage = 1 Shared Base Model + Sum of Small LoRA Adapters",
      "key_takeaways": [
        "Store 1 base model + M small task-specific adapters.",
        "Saves hundreds of gigabytes of disk and GPU memory.",
        "Enables dynamic hot-swapping across multiple tasks."
      ]
    },
    "sample_questions": [
      {
        "q": "How much storage is saved by storing 10 LoRA adapters (50 MB each) on a 13B model (26 GB) versus 10 full fine-tuned model copies?",
        "options": [
          "100 GB saved",
          "~234 GB saved (260 GB vs 26.5 GB)",
          "0 MB saved",
          "1 GB saved"
        ],
        "ans": "~234 GB saved (260 GB vs 26.5 GB)",
        "exp": "10 full models = 260 GB. 1 base + 10 adapters = 26.5 GB (saving ~234 GB)."
      },
      {
        "q": "What server framework specializes in serving thousands of different LoRA adapters concurrently on a single base model?",
        "options": [
          "NumPy",
          "SQLite",
          "S-LoRA / vLLM Multi-LoRA",
          "Flask"
        ],
        "ans": "S-LoRA / vLLM Multi-LoRA",
        "exp": "S-LoRA and vLLM support dynamic batched multi-adapter routing in production."
      }
    ]
  },
  {
    "id": "q65",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Weight Merging for Zero Inference Latency Overhead",
    "difficulty": "Hard",
    "points": 2,
    "question": "After a LoRA adapter has been trained, what is one practical effect of merging its learned update into the corresponding base weights for deployment?",
    "options": [
      "The original tokenizer is automatically replaced",
      "The model can use the adapted weights without a separate LoRA matrix path for those layers",
      "The model no longer needs any input tokens",
      "The merged model becomes an encoder-decoder architecture"
    ],
    "correct": "The model can use the adapted weights without a separate LoRA matrix path for those layers",
    "explanation": "A trained low-rank update can be algebraically added to the base weights, allowing inference with the merged adapted weights rather than separate adapter multiplications.",
    "theory": {
      "title": "LoRA Weight Merging (Zero Inference Latency Overhead)",
      "what_is_it": "During training, LoRA runs a parallel side-path (B \u00b7 A). Before deploying to production, you can algebraically add the adapter directly into the base weights: W_merged = W\u2080 + (\u03b1 / r) \u00b7 (B \u00b7 A).",
      "why_we_need_it": "Merging eliminates the extra matrix multiplications during inference, giving you the adapted model behavior with zero extra latency and zero added memory overhead!",
      "how_it_works": "In Hugging Face PEFT: model = model.merge_and_unload(). It fuses the weights permanently into standard base layers.",
      "formula": "W_merged = W\u2080 + (\u03b1 / r) \u00b7 (B \u00b7 A)",
      "key_takeaways": [
        "Algebraically fuses adapter weights into base weights: W_merged = W\u2080 + (\u03b1/r)\u00b7BA.",
        "Zero latency overhead during deployment.",
        "In HuggingFace: model.merge_and_unload()."
      ]
    },
    "sample_questions": [
      {
        "q": "In Hugging Face PEFT, which method permanently fuses LoRA adapter weights into base weights?",
        "options": [
          "model.merge_and_unload()",
          "model.train()",
          "model.delete_adapter()",
          "model.split()"
        ],
        "ans": "model.merge_and_unload()",
        "exp": "merge_and_unload() fuses B \u00b7 A into base weights."
      },
      {
        "q": "Is there any extra inference latency when using a merged LoRA model compared to the original base model?",
        "options": [
          "Only on CPUs",
          "Yes, 50ms per token",
          "Yes, 2x slower",
          "No, exactly 0 latency penalty because computation remains a single standard matrix multiplication"
        ],
        "ans": "No, exactly 0 latency penalty because computation remains a single standard matrix multiplication",
        "exp": "Because the weights are fused into W_merged, inference runs standard matrix multiplications."
      }
    ]
  }
];
