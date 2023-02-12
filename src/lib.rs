use std::collections::HashMap;

use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[derive(Serialize, Deserialize)]
pub struct GroupObject {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
}

#[wasm_bindgen]
pub fn group_by_key() -> Result<JsValue, JsValue> {
    let mut field1 = HashMap::new();
    field1.insert(0, String::from("ex"));

    let example = GroupObject {
        field1,
        field2: vec![vec![1., 2.], vec![3., 4.]],
        field3: [1., 2., 3., 4.],
    };

    Ok(serde_wasm_bindgen::to_value(&example)?)
}
